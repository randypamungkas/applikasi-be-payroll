var express = require('express')
var router = express.Router()
const employeeController = require('../modules/controllers/employee')

/* GET employees listing. */
router.get('/get-all-employee', employeeController.employeeGetAll)
router.get('/detail-employee/:id', employeeController.getDetailEmployee)
router.post('/create-employee', employeeController.createEmployee)
router.put('/update-employee/:id', employeeController.updateEmployee)
router.delete('/delete-employee/:id', employeeController.deleteEmployee)

module.exports = router
