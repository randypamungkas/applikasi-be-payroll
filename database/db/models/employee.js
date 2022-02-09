"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Employee.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      code: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      account_number: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
      },
      salary: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      overtime: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      salary_received: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "employees",
      tableName: "employees",
      freezeTableName: true,
    }
  );
  return Employee;
};
