const noteController = require('../controllers').notes

const express = require('express')

const router = express.Router()

router.get('/notes', noteController.list)
router.get('/notes/:id', noteController.getById)
router.post('/notes', noteController.create)
router.put('/notes/:id', noteController.update)

module.exports = router
