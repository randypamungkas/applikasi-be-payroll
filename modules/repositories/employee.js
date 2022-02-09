const db = require("../../database/db/models");
const employeeController = require("../controllers/employee")
const {
  v4: uuidv4
} = require("uuid");

module.exports = {
  getDetailEmployee: async (req) => {
    try {
      const response = await db.employees.findByPk(req.params.id, {
        attributes: [
          "id",
          "code",
          "name",
          "address",
          "account_number",
          "salary",
          "overtime",
          "salary_received",
          "createdAt",
          "updatedAt",
        ],
      }, {
        raw: true,
      });

      return response;
    } catch (err) {
      throw new Error(err);
    }
  },

  createEmployee: async (req) => {
    try {
      const response = await db.employees.create({
        ...req.body,
        id: uuidv4()
      });

      return response;
    } catch (err) {
      throw new Error(err);
    }
  },

  updateEmployee: async (req) => {
    try {
      const response = await db.employees.update(req.body, {
        where: req.params
      });

      if (response[0] === 1) {
        const res = await db.employees.findByPk(req.params.id)
        return res
      }
    } catch (err) {
      throw new Error(err);
    }
  },

  deleteEmployee: async (req) => {
    try {
      const response = await db.employees.destroy({
        where: req.params
      });

      if (response === 1) {
        const res = await db.employees.findByPk(req.params.id)

        return res
      }
    } catch (err) {
      throw new Error(err);
    }
  },

  getAllEmployee: async () => {
    try {
      const response = await db.employees.findAll({
        attributes: [
          "id",
          "code",
          "name",
          "address",
          "account_number",
          "salary",
          "overtime",
          "salary_received",
          "createdAt",
          "updatedAt",
        ],
      }, {
        raw: true,
      });

      return response;
    } catch (err) {
      throw new Error(err);
    }
  },
};