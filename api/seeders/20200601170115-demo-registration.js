module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Registration', [
			{
				status: "confirmed",
				student_id: 1,
				team_id: 1,
				createdAt: new Date(),
				updatedAt: new Date()
		},
		{
			status: "confirmed",
			student_id: 2,
			team_id: 1,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "confirmed",
			student_id: 3,
			team_id: 2,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "confirmed",
			student_id: 4,
			team_id: 3,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "canceled",
			student_id: 1,
			team_id: 2,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "canceled",
			student_id: 2,
			team_id: 2,
			createdAt: new Date(),
			updatedAt: new Date()
		}
		], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Registration', null, {})
  }
}
