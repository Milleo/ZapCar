var express = require('express');
var router = express.Router();
var UsuariosRouter = require("./UsuariosRouter");
var LojasRouter = require("./LojasRouter");
var MarcasRouter = require("./MarcasRouter");

var db = require("../../models");


router.get('/', function(req, res, next) {
  res.render('admin/index');
});

router.use("/usuarios", UsuariosRouter);
router.use("/lojas", LojasRouter);
router.use("/marcas", MarcasRouter);


module.exports = router;
