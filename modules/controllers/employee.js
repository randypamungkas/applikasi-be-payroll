const employeeRepository = require('../repositories/employee')
const { failed, success, successAndCount } = require('../../helper/response')
const moment = require('moment')
const pdf = require('pdf-creator-node')
const fs = require('fs')

// Read HTML Template
const html = fs.readFileSync(`${__dirname}/../templates/employee.html`, 'utf8')

module.exports = {
  employeeGetAll: async (req, res) => {
    try {
      const { rows, count, pages } = await employeeRepository.getAllEmployee(
        req,
        res,
      )

      res.status(200)
      successAndCount(
        res,
        rows,
        count,
        pages,
        rows.length < 1 ? 'Data tidak ditemukan' : 'Sukses',
      )
    } catch (err) {
      res.status(400)
      failed(res, [], err.message)
    }
  },

  getDetailEmployee: async (req, res) => {
    try {
      const response = await employeeRepository.getDetailEmployee(req, res)

      res.status(200)
      success(res, response || [], 'Sukses')
    } catch (err) {
      res.status(400)
      failed(res, [], err.message)
    }
  },

  createEmployee: async (req, res) => {
    try {
      const response = await employeeRepository.createEmployee(req, res)

      res.status(200)
      success(res, response || [], 'Karyawan berhasil ditambahkan')
    } catch (err) {
      res.status(400)
      failed(res, [], err.message)
    }
  },

  updateEmployee: async (req, res) => {
    try {
      const response = await employeeRepository.updateEmployee(req, res)

      res.status(200)
      success(res, response || [], 'Karyawan berhasil diperbarui')
    } catch (err) {
      res.status(400)
      failed(res, [], err.message)
    }
  },

  deleteEmployee: async (req, res) => {
    try {
      const response = await employeeRepository.deleteEmployee(req, res)

      res.status(200)
      success(res, response || [], 'Data berhasil dihapus')
    } catch (err) {
      res.status(400)
      failed(res, [], err.message)
    }
  },

  printPdfPaySlipsEmployee: async (req, res) => {
    try {
      const response = await employeeRepository.getDetailEmployee(req, res)

      const options = {
        format: 'A5',
        orientation: 'landscape',
        border: '10mm',
      }

      const document = {
        html: html,
        header: {
          height: '45mm',
          contents:
            '<div style="text-align: center;">Author: Shyam Hajare</div>',
        },
        data: {
          employee: {
            ...response,
            salary: Intl.NumberFormat('en-US').format(response.salary),
            createdAt: moment(response.createdAt).format('D MMM YYYY'),
            updatedAt: moment(response.updatedAt).format('D MMM YYYY'),
            salary_received: Intl.NumberFormat('en-US').format(
              response.salary_received,
            ),
          },
        },
        path: './output.pdf',
      }

      pdf
        .create(document, options)
        .then((resDocs) => {
          res.status(200).sendfile(resDocs.filename)
        })
        .catch((error) => {
          console.error(error)
        })
    } catch (err) {
      res.status(400)
      failed(res, [], err.message)
    }
  },
}
