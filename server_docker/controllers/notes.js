const response = require('../core/response')

module.exports = {
	getById(req, res) {
		res.status(200).json(
			response.build({
				id: 1,
				title: 'Test One',
				time: '1:00 pm',
				active: true,
			})
		)
	},
	list(req, res) {
		res.status(200).json(
			response.build([
				{
					id: 1,
					title: 'Test One',
					time: '1:00 pm',
					active: true,
				},
				{
					id: 2,
					title: 'Test Two',
					time: '2:00 pm',
					active: false,
				},
				{
					id: 3,
					title: 'Test Three',
					time: '7:00 pm',
					active: false,
				},
				{
					id: 4,
					title: 'Test Four',
					time: '9:00 pm',
					active: false,
				},
				{
					id: 5,
					title: 'Test Five',
					time: '9:00 pm',
					active: false,
				},
				{
					id: 6,
					title: 'Test Six',
					time: '9:00 pm',
					active: false,
				},
			])
		)
	},
}
