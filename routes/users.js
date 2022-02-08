var express = require("express");
var router = express.Router();
const userController = require("../modules/controllers/user");

/* GET users listing. */
router.get("/get-all-user", userController.userGetAll);
router.post("/create-user", userController.careteUser);

module.exports = router;
