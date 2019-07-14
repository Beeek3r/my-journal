// Imports
var express = require('express')
var router = express.Router()
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const auth = require('../middleware/auth')
const User = require('../models/User')

// @route       GET /api/auth
// @desc        Get logged in user
// @access      Private
router.get('/', auth, async (req, res) => {
  // res.json({ msg: 'GET /api/auth' })
  try {
    const user = await User.findById(req.user.id).select('-password') // Returns user but minus the password field even though its encrypted
    res.json({ user })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
})

// @route       POST /api/auth
// @desc        Authorize user & get token (Login)
// @access      Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(), // prettier-ignore
    check('password', 'Password is required').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ err: errors.array() })
    }

    const { email, password } = req.body
    try {
      let user = await User.findOne({ email })

      if (!user) {
        return res.status(400).json({ msg: 'Invalid Credentials' })
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid Credentials' })
      }

      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          // Usually use 3600 for 1 hour
          expiresIn: 360000
        },
        (err, token) => {
          if (err) throw error
          res.json({ token })
        }
      )
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server error')
    }
  }
)

// Exports
module.exports = router
