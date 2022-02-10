const employeeRepository = require("../repositories/employee");
const {
  failed,
  success,
  successAndCount,
} = require("../../helper/response");

module.exports = {
  employeeGetAll: async (req, res) => {
    try {
      const {
        rows,
        count,
        pages
      } = await employeeRepository.getAllEmployee(req, res);

      res.status(200)
      successAndCount(
        res, rows, count, pages, rows.length < 1 ? "Data tidak ditemukan" : "Sukses"
      )
    } catch (err) {
      res.status(400)
      failed(res, [], err.message)
    }
  },

  getDetailEmployee: async (req, res) => {
    try {
      const response = await employeeRepository.getDetailEmployee(req, res);

      res.status(200)
      success(res, response || [], "Sukses")
    } catch (err) {
      res.status(400)
      failed(res, [], err.message)
    }
  },

  createEmployee: async (req, res) => {
    try {
      const response = await employeeRepository.createEmployee(req, res);

      res.status(200)
      success(res, response || [], "Karyawan berhasil ditambahkan")
    } catch (err) {
      res.status(400)
      failed(res, [], err.message)
    }
  },

  updateEmployee: async (req, res) => {
    try {
      const response = await employeeRepository.updateEmployee(req, res);

      res.status(200)
      success(res, response || [], "Karyawan berhasil diperbarui")
    } catch (err) {
      res.status(400)
      failed(res, [], err.message)
    }
  },

  deleteEmployee: async (req, res) => {
    try {
      const response = await employeeRepository.deleteEmployee(req, res);

      res.status(200)
      success(res, response || [], "Data berhasil dihapus")
    } catch (err) {
      res.status(400)
      failed(res, [], err.message)
    }
  }
};