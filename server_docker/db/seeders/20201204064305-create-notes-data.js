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
						{
							insert: faker.lorem.paragraph(2),
							attributes: { bold: true },
						},
						{ insert: faker.lorem.sentence(3) },
						{
							insert: faker.lorem.sentence(5),
							attributes: { color: '#cccccc' },
						},
					],
				}),
				createdAt: faker.date.recent(20),
				updatedAt: new Date(),
			})
		}

		return queryInterface.bulkInsert('Notes', noteData)
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Notes', null, {})
	},
}
