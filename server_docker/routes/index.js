const jobController = require('../controllers').jobs

module.exports = (app) => {
	app.get('/api/jobs', jobController.list)
}
