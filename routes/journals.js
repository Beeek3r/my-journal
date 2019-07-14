// Imports
const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')

// Model Imports
const User = require('../models/User')
const Journal = require('../models/Journal')

// Middleware
const auth = require('../middleware/auth')

// @route       GET /api/journals
// @desc        Get all users journal entries
// @access      Private
router.get('/', auth, async (req, res) => {
  try {
    // After the auth, the request should have a property of user.id (Not stored in req.body)
    const journals = await Journal.find({ user: req.user.id }).sort({ date: -1 }) // Most recent journal entry first (-1)
    res.json({ journals })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
})

// @route       POST /api/journals
// @desc        Adding new journal entry
// @access      Private
router.post(
  '/',
  [
    auth,
    [
      check('title', 'Title is required')
        .not()
        .isEmpty(),
      check('favourite', 'Expected a boolean for favourite').isBoolean()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { title, body, date, favourite, mood } = req.body

    try {
      const newJournal = new Journal({
        title,
        body,
        date,
        favourite,
        mood,
        user: req.user.id
      })

      const journal = await newJournal.save()
      res.json({ journal })
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server error')
    }
  }
)

// @route       PUT /api/journals
// @desc        Updating an existing journal entry
// @access      Private
router.put('/:id', auth, async (req, res) => {
  const { title, body, date, favourite, mood } = req.body

  // Build a journal entry object
  const journalEntry = {}
  if (title) journalEntry.title = title
  if (body) journalEntry.body = body
  if (date) journalEntry.date = date
  if (favourite) journalEntry.favourite = favourite
  if (mood) journalEntry.mood = mood

  try {
    let journal = await Journal.findById(req.params.id)
    if (!journal) return res.status(404).json({ msg: 'Journal entry not found' })
    if (journal.user.toString() !== req.user.id) return res.status(401).send('Not authorized')

    journal = await Journal.findByIdAndUpdate(req.params.id, { $set: journalEntry }, { new: true })
    res.json(journal)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
})

// @route       DELETE /api/journals
// @desc        Deleting an existing journal entry
// @access      Private
router.delete('/:id', auth, async (req, res) => {
  let journal = await Journal.findById(req.params.id)
  if (!journal) return res.status(404).json({ msg: 'Journal entry not found' })
  if (journal.user.toString() !== req.user.id) return res.status(401).send('Not authorized')

  await Journal.findByIdAndRemove(req.params.id)
  res.json({ msg: 'Sucessfully removed contact' })
})

// Exports
module.exports = router
