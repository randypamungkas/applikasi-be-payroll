const db = require("../../database/db/models");
const {
  v4: uuidv4
} = require("uuid");
const {
  failed,
  success,
  successAndCount,
} = require("../../helper/response");
const e = require("express");

module.exports = {
  getDetailEmployee: async (req, res) => {
    try {
      const response = await db.employees.findByPk(req.params.id, {
        raw: true,
      });

      if (response) {
        success(res, response || [], "Sukses")
      }

      failed(res, "Tidak ada data")
    } catch (err) {
      failed(res, err.message)
    }
  },

  createEmployee: async (req, res) => {
    try {
      const response = await db.employees.create({
        ...req.body,
        id: uuidv4()
      });

      success(res, response || [], "Karyawan berhasil ditambahkan")
    } catch (err) {
      throw new Error(err);
    }
  },

  updateEmployee: async (req, res) => {
    try {
      const response = await db.employees.update(req.body, {
        where: req.params
      });

      if (response[0] === 1) {
        const resDetailEmployee = await db.employees.findByPk(req.params.id)

        success(res, resDetailEmployee || [], "Karyawan berhasil diperbarui")
      }
    } catch (err) {
      throw new Error(err);
    }
  },

  deleteEmployee: async (req, res) => {
    try {
      const response = await db.employees.destroy({
        where: req.params
      });

      if (response === 1) {
        const resEmployee = await db.employees.findAll({
          raw: true,
        });

        success(res, resEmployee || [], !resEmployee && "Data berhasil dihapus")
      }
    } catch (err) {
      failed(res, err.message);
    }
  },

  getAllEmployee: async (req, res) => {
    try {
      const limit = +req.query.limit || 100;
      const page = +req.query.page || 1;

      const {
        count,
        rows
      } = await db.employees.findAndCountAll({
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
        limit,
        offset: page <= 1 ? 0 : (page - 1) * limit,
        raw: true,
      });

      const pages = Math.ceil(count / limit)

      successAndCount(
        res, rows, count, pages, rows.length < 1 ? "Data tidak ditemukan" : "Sukses"
      )
    } catch (err) {
      failed(res, err.message);
    }
  },
};