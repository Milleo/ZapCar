var express = require('express');
var router = express.Router();
var UsuariosRouter = require("./UsuariosRouter");
var LojasRouter = require("./LojasRouter");


router.get('/', function(req, res, next) {
  res.render('admin/index');
});

router.use("/usuarios", UsuariosRouter);
router.use("/lojas", LojasRouter);

module.exports = router;
