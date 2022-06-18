const express = require('express');
const router = express.Router();
const AdminController = require("../../controllers/AdminController");
const multer = require('multer');
const path = require("path");

const upload = multer({
    limits: {
      fileSize: 4 * 1024 * 1024,
    },
    dest: "public/images/slider"
});

router.get('/', AdminController.imagensSlider);
router.get('/adicionar', AdminController.adicioarImagemSlider);
router.post('/adicionar', upload.single("arquivoImagem"), AdminController.acaoAdicioarImagemSlider);
router.get('/excluir/:id', AdminController.excluirImagemSlider);

module.exports = router;
