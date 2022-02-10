"use strict";
const employeeData = [{
  id: "be75019d-0e1e-437f-8a0c-e8154597b04d",
  // password: "$2a$10$njw56QbYjx/WLqw7ttPyb.2OMAL1s/k9PykeiUlDGhLMZFBYMJLs6",
  // admin123456,
  code: "001",
  name: "Ahmad",
  address: "Cipinang Muara",
  account_number: "63923893",
  salary: "1000000",
  overtime: 20,
  salary_received: "1000000",
  updatedAt: new Date(Date.now()),
  createdAt: new Date(Date.now()),
}, ];

module.exports = {
  async up(queryInterface, Sequelize) {
    // Add seed commands here.
    await queryInterface.bulkInsert("employees", employeeData, {});
  },

  async down(queryInterface, Sequelize) {
    // Add commands to revert seed here.
    await queryInterface.bulkDelete("employees", null, {});
  },
};