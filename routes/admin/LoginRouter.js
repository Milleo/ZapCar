var express = require('express');
var router = express.Router();
const AuthController = require("../../controllers/AuthController");

router.get("/login", AuthController.login);
router.post("/login", AuthController.loginAcao);
router.get("/logout", AuthController.logout);

module.exports = router;