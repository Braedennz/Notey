const noteController = require('../controllers').notes

module.exports = (app) => {
	app.get('/api/notes', noteController.list)
}
