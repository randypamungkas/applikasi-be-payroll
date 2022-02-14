const db = require('../../database/db/models')
const { v4: uuidv4 } = require('uuid')

module.exports = {
  getDetailEmployee: async (req, res) => {
    try {
      const response = await db.employees.findByPk(req.params.id, {
        raw: true,
      })

      if (response) {
        return response
      }

      throw new Error('Data tidak ada')
    } catch (err) {
      throw new Error(err)
    }
  },

  createEmployee: async (req, res) => {
    try {
      const response = await db.employees.create({
        ...req.body,
        id: uuidv4(),
      })

      return response
    } catch (err) {
      throw new Error(err)
    }
  },

  updateEmployee: async (req, res) => {
    try {
      const response = await db.employees.update(req.body, {
        where: req.params,
      })

      if (response[0] === 1) {
        const resDetailEmployee = await db.employees.findByPk(req.params.id)

        return resDetailEmployee
      }

      throw new Error('Data tidak ada')
    } catch (err) {
      throw new Error(err)
    }
  },

  deleteEmployee: async (req, res) => {
    try {
      const response = await db.employees.destroy({
        where: req.params,
      })

      if (response === 1) {
        const resEmployee = await db.employees.findAll({
          raw: true,
        })

        return resEmployee
      }

      throw new Error('Data tidak ada')
    } catch (err) {
      throw new Error(err)
    }
  },

  getAllEmployee: async (req, res) => {
    try {
      const limit = +req.query.limit || 100
      const page = +req.query.page || 1

      const { count, rows } = await db.employees.findAndCountAll(
        {
          attributes: [
            'id',
            'code',
            'name',
            'address',
            'account_number',
            'salary',
            'overtime',
            'salary_received',
            'createdAt',
            'updatedAt',
          ],
          order: [
            ['name', 'ASC'],
            ['code', 'ASC'],
          ],
        },
        {
          limit,
          offset: page <= 1 ? 0 : (page - 1) * limit,
          raw: true,
        },
      )

      const pages = Math.ceil(count / limit)

      return {
        count,
        rows,
        pages,
      }
    } catch (err) {
      throw new Error(err)
    }
  },
}
