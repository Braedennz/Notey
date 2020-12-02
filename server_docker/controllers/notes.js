const response = require('../core/response')

module.exports = {
	getById(req, res) {
		res.status(200).json(
			response.build({
				id: 1,
				title: 'Test One',
				time: '1:00 pm',
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
				},
				{
					id: 2,
					title: 'Test Two',
					time: '2:00 pm',
				},
				{
					id: 3,
					title: 'Test Three',
					time: '7:00 pm',
				},
				{
					id: 4,
					title: 'Test Four',
					time: '9:00 pm',
				},
				{
					id: 5,
					title: 'Test Five',
					time: '9:00 pm',
				},
				{
					id: 6,
					title: 'Test Six',
					time: '9:00 pm',
				},
			])
		)
	},
}
