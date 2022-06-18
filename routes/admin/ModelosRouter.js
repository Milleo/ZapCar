var express = require('express');
var router = express.Router();
var ModelosController = require("../../controllers/ModelosController");
var ModelosValidator = require("../../middlewares/validations/ModelosValidator");

router.get('/', ModelosController.listar);
router.get('/cadastrar', ModelosController.cadastrar);
router.post('/cadastrar', ModelosValidator, ModelosController.acaoCadastrar);
router.get('/alterar/:idModelo', ModelosController.editar);
router.post('/alterar/:idModelo', ModelosValidator, ModelosController.acaoEditar);
router.get('/excluir/:idModelo', ModelosController.excluir);

module.exports = router;
