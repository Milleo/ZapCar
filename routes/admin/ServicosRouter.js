var express = require('express');
var router = express.Router();
var ServicosController = require("../../controllers/ServicosController");

router.get('/', ServicosController.listar);
router.get('/cadastrar', ServicosController.cadastrar);
router.post('/cadastrar', ServicosController.acaoCadastrar);
router.get('/alterar/:idServico', ServicosController.editar);
router.post('/alterar/:idServico', ServicosController.acaoEditar);
router.get('/excluir/:idServico', ServicosController.excluir);

module.exports = router;
