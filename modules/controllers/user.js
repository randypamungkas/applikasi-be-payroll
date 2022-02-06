const userRepository = require('../repositories/user')

module.exports = {
  userGetAll: async (req, res) => {
    try {
      const response = await userRepository.getAllUser()

      res.status(200).json(response)
    } catch (err) {
      res.status(400).json(err.message)
    }
  },
}
