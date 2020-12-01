const response = require('../core/response')

module.exports = {
	list(req, res) {
		res.status(200).json(response.build([]))
	},
}
