var express = require('express');
var router = express.Router();
var UsuariosRouter = require("./UsuariosRouter");
var LojasRouter = require("./LojasRouter");
var MarcasRouter = require("./MarcasRouter");
var ServicosRouter = require("./ServicosRouter");
var imagensSliderRouter = require("./ImagensSliderRouter");

var db = require("../../models");


router.get('/', function(req, res, next) {
  res.render('admin/index', { title: "Dashboard" });
});

router.use("/usuarios", UsuariosRouter);
router.use("/lojas", LojasRouter);
router.use("/marcas", MarcasRouter);
router.use("/servicos", ServicosRouter);
router.use("/imagensSlider", imagensSliderRouter);


module.exports = router;
