'use strict'
const userData = [
  {
    id: 'be75019d-0e1e-437f-8a0c-e8154597b04d',
    password: '$2a$10$njw56QbYjx/WLqw7ttPyb.2OMAL1s/k9PykeiUlDGhLMZFBYMJLs6',
    // admin123456,
    firstName: 'Fahras Nur',
    lastName: 'Hidayat',
    email: 'fahras@gmail.com',
    bio: 'Fahras Ganteng',
    updatedAt: new Date(Date.now()),
    createdAt: new Date(Date.now()),
  },
]

module.exports = {
  async up(queryInterface, Sequelize) {
    // Add seed commands here.
    await queryInterface.bulkInsert('users', userData, {})
  },

  async down(queryInterface, Sequelize) {
    // Add commands to revert seed here.
    await queryInterface.bulkDelete('users', null, {})
  },
}
