const employeeRepository = require("../repositories/employee");

module.exports = {
  employeeGetAll: async (req, res) => {
    try {
      const response = await employeeRepository.getAllEmployee(req, res);

      res.status(200).json(response);
    } catch (err) {
      res.status(400).json(err.message);
    }
  },

  getDetailEmployee: async (req, res) => {
    try {
      const response = await employeeRepository.getDetailEmployee(req, res);

      res.status(200).json(response);
    } catch (err) {
      res.status(400).json(err.message);
    }
  },

  createEmployee: async (req, res) => {
    try {
      const response = await employeeRepository.createEmployee(req, res);

      res.status(200).json(response);
    } catch (err) {
      res.status(400).json(err.message);
    }
  },

  updateEmployee: async (req, res) => {
    try {
      const response = await employeeRepository.updateEmployee(req, res);

      res.status(200).json(response);
    } catch (err) {
      res.status(400).json(err.message);
    }
  },

  deleteEmployee: async (req, res) => {
    try {
      const response = await employeeRepository.deleteEmployee(req, res);

      res.status(200).json(response);
    } catch (err) {
      res.status(400).json(err.message);
    }
  }
};