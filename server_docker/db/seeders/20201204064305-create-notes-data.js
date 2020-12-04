'use strict'

const faker = require('faker')

module.exports = {
	up: async (queryInterface, Sequelize) => {
		let noteData = []

		for (let i = 0; i < 10; i++) {
			noteData.push({
				title: faker.lorem.sentence(3, 6),
				content: JSON.stringify({
					ops: [
						{ insert: 'Gandalf', attributes: { bold: true } },
						{ insert: ' the ' },
						{ insert: 'Grey', attributes: { color: '#cccccc' } },
					],
				}),
				createdAt: new Date(),
				updatedAt: new Date(),
			})
		}

		return queryInterface.bulkInsert('Notes', noteData)
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Notes', null, {})
	},
}
