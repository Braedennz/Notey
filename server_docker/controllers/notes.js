const response = require('../core/response')
const note = require('../db/models').Note

module.exports = {
	getById(req, res) {
		return note
			.findByPk(req.params.id)
			.then((note) => {
				return res.status(200).json(response.build(note))
			})
			.catch((error) => res.status(400).send(response.build(error)))
	},
	list(req, res) {
		return note
			.findAll({
				attributes: ['id', 'title', 'createdAt'],
				order: [['createdAt', 'DESC']],
			})
			.then((notes) => {
				return res.status(200).json(response.build(notes))
			})
			.catch((error) => res.status(400).send(response.build(error)))
	},
	create(req, res) {
		return note
			.create(req.body)
			.then((note) => {
				return res.status(200).json(response.build(note))
			})
			.catch((error) => res.status(400).send(response.build(error)))
	},
	update(req, res) {
		return note
			.update(
				{ title: req.body.title },
				{
					where: {
						id: req.params.id,
					},
				}
			)
			.then((note) => {
				return res.status(200).json(response.build(note))
			})
			.catch((error) => res.status(400).send(response.build(error)))
	},
}
