const db = require("../../database/db/models");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  createUser: async (req) => {
    try {
      const response = await db.users.create({ ...req.body, id: uuidv4() });

      return response;
    } catch (err) {
      throw new Error(err);
    }
  },

  getAllUser: async () => {
    try {
      const response = await db.users.findAll(
        {
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
        },
        {
          raw: true,
        }
      );

      return response;
    } catch (err) {
      throw new Error(err);
    }
  },
};
