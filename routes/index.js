var express = require('express');
var router = express.Router();
const FrontendController = require("../controllers/FrontendController");

/* GET home page. */
router.get('/', FrontendController.index);

module.exports = router;
