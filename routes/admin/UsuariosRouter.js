var express = require('express');
var router = express.Router();
var UsuariosController = require("../../controllers/UsuariosController");

router.get('/', UsuariosController.listar);
router.get('/cadastrar', UsuariosController.cadastrar);
router.post('/cadastrar', UsuariosController.acaoCadastrar);
router.get('/alterar/:id', UsuariosController.alterar);
router.post('/alterar/:id', UsuariosController.acaoAlterar);
router.get('/excluir/:id', UsuariosController.excluir);

module.exports = router;
