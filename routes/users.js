var express = require('express')
var router = express.Router()
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const User = require('../models/User')

// POST   |   /api/users   |   Registering a new user    |   Public
router.post(
  '/',
  [
    check('firstName', 'Please add a first name')
      .not()
      .isEmpty(),
    check('lastName', 'Please add a last name')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req)
    let errorMessage = ''
    const { firstName, lastName, email, password } = req.body

    if (!errors.isEmpty()) {
      for (i = 0; i < errorResults.length; i++) {
        errorMessage += ` ${errorResults[i].msg}`
      }
      res.status(400).json({ msg: errorMessage })
    } else {
      try {
        let user = await User.findOne({ email })
        if (user) {
          return res.status(400).json({ msg: 'User already exists' })
        }

        user = new User({
          firstName: firstName,
          lastName,
          email,
          password
        })

        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password, salt)

        // await is required as it returns a promise
        await user.save()

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
  }
)

// Exports
module.exports = router
