const db = require("../models");

const FrontendController = {
    index: async (req, res) => {
        const lojas = await db.Centro.findAll({ include: [ "endereco" ]});
        const servicos = await db.Servico.findAll();
        const imagens = await db.ImagemSlider.findAll();
        console.log(lojas);
        res.render("index", {
            imagensSlider: imagens,
            lojas: lojas,
            planos: servicos
        })
    }
}

module.exports = FrontendController;