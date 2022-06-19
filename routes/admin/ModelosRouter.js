var express = require('express');
var router = express.Router();
var ModelosController = require("../../controllers/ModelosController");
var ModelosValidator = require("../../middlewares/validations/ModelosValidator");
const multer = require('multer');

const upload = multer({
    limits: {
      fileSize: 4 * 1024 * 1024,
    },
    dest: "public/uploads/modelos"
});

router.get('/', ModelosController.listar);
router.get('/cadastrar', ModelosController.cadastrar);
router.post('/cadastrar', ModelosValidator, upload.single("arquivoImagem"), ModelosController.acaoCadastrar);
router.get('/alterar/:idModelo', ModelosController.editar);
router.post('/alterar/:idModelo', ModelosValidator, upload.single("arquivoImagem"), ModelosController.acaoEditar);
router.get('/excluir/:idModelo', ModelosController.excluir);

module.exports = router;
