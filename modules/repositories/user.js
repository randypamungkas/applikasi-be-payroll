const db = require('../../database/db/models')

module.exports = {
  getAllUser: async () => {
    try {
      const response = await db.users.findAll(
        {
          attributes: [
            'id',
            'firstName',
            'lastName',
            'email',
            'bio',
            'createdAt',
            'updatedAt',
          ],
        },
        { raw: true },
      )

      return response
    } catch (err) {
      throw new Error(err)
    }
  },
}
