const response = require('../core/response')

module.exports = {
	list(req, res) {
		res.status(200).json(
			response.build([
				{
					title: 'Test One',
					time: '1:00 pm',
					active: true,
				},
				{
					title: 'Test Two',
					time: '2:00 pm',
					active: false,
				},
				{
					title: 'Test Three',
					time: '7:00 pm',
					active: false,
				},
				{
					title: 'Test Four',
					time: '9:00 pm',
					active: false,
				},
			])
		)
	},
}
