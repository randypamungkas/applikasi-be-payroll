var express = require('express')
var router = express.Router()
const userController = require('../modules/controllers/user')

/* GET users listing. */
router.get('/get-all-user', userController.userGetAll)

module.exports = router
