const express = require('express')

const router = express.Router()

const Note = require('./models/note');

router.get('/notes', async (req, res) => {
    await Note.find({}, (err, notes) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        
        if (!notes.length) {
            return res
                .status(404)
                .json({ success: false, error: `Nothing found` })
        }

        return res.status(200).json({ success: true, data: notes })
    }).catch(err => console.log(err))
})

module.exports = router