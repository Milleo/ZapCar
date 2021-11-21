var express = require('express');
var router = express.Router();
var CentrosController = require("../../controllers/CentrosController");

router.get('/', CentrosController.listar);
router.get('/cadastrar', CentrosController.cadastrar);
router.post('/cadastrar', CentrosController.acaoCadastrar);
router.get('/alterar/:id', CentrosController.alterar);
router.post('/alterar/:id', CentrosController.acaoAlterar);
router.get('/excluir/:id', CentrosController.excluir);

module.exports = router;
