"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("employees", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      code: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      account_number: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      salary: {
        type: Sequelize.BIGINT(11),
        allowNull: true,
      },
      overtime: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
      },
      salary_received: {
        type: Sequelize.BIGINT(11),
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("employees");
  },
};