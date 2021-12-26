const db = require("../models");

const MarcasController = {
    listar: async (req, res) => {
        const marcas = await db.Marca.findAll();

        res.render("admin/marcas/index", { marcas: marcas });
    },

    cadastrar: (req, res) => {
        res.render("admin/marcas/form", { formAction: "/admin/marcas/cadastrar", marca: {}, buttonMessage: "Cadastrar" });
    },

    acaoCadastrar: async (req, res) => {
        const { nome } = req.body;

        await db.Marca.create({
            nome: nome
        })

        res.redirect("/admin/marcas");
    },

    editar: async (req, res) => {
        const { idMarca } = req.params;

        const marca = await db.Marca.findByPk(idMarca);

        res.render("admin/marcas/form", {
            formAction: "/admin/marcas/alterar/" + idMarca,
            marca: marca,
            buttonMessage: "Alterar"
        })
    },

    acaoEditar: async(req, res) => {
        const { nome } = req.body;
        const { idMarca } = req.params;

        await db.Marca.update({
            nome: nome
        }, { where: {
            id: idMarca
        }});

        res.redirect("/admin/marcas");
    },

    excluir: async(req, res) =>{
        const { idMarca } = req.params;

        await db.Marca.destroy({where: { id: idMarca }});

        res.redirect("/admin/marcas");
    }
}

module.exports = MarcasController;