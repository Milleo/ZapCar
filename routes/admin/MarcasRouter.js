var express = require('express');
var router = express.Router();
var MarcasController = require("../../controllers/MarcasController");

router.get('/', MarcasController.listar);
router.get('/cadastrar', MarcasController.cadastrar);
router.post('/cadastrar', MarcasController.acaoCadastrar);
router.get('/alterar/:idMarca', MarcasController.editar);
router.post('/alterar/:idMarca', MarcasController.acaoEditar);
router.get('/excluir/:idMarca', MarcasController.excluir);

module.exports = router;
