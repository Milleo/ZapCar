var express = require('express');
var router = express.Router();
var imagensSliderRouter = require("./ImagensSliderRouter");
var LojasRouter = require("./LojasRouter");
var MarcasRouter = require("./MarcasRouter");
var ModelosRouter = require("./ModelosRouter");
var ServicosRouter = require("./ServicosRouter");
var UsuariosRouter = require("./UsuariosRouter");

router.get('/', function(req, res, next) {
  res.render('admin/index', { title: "Dashboard" });
});

router.use("/imagensSlider", imagensSliderRouter);
router.use("/lojas", LojasRouter);
router.use("/marcas", MarcasRouter);
router.use("/modelos", ModelosRouter);
router.use("/servicos", ServicosRouter);
router.use("/usuarios", UsuariosRouter);



module.exports = router;
