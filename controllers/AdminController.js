const db = require("../models");

const AdminController = {
    imagensSlider: async (req, res) => {
        const imagens = await db.ImagemSlider.findAll({});
        res.render("admin/imagensSlider/index", { imagens: imagens });
    },
    adicioarImagemSlider: async (req, res) => {
        res.render("admin/imagensSlider/form");
    },
    acaoAdicioarImagemSlider: async (req, res) => {
        const { titulo, texto, arquivoImagem } = req.body;
        await db.ImagemSlider.create({ titulo, texto, imagem: req.file.filename });

        res.redirect("/admin/imagensSlider");
    },
    excluirImagemSlider: async (req, res) => {
        const { id } = req.params;
        await db.ImagemSlider.destroy({ where: { id: id } });
        res.redirect("/admin/imagensSlider");
    }
    
};

module.exports = AdminController;