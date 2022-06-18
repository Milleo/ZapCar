const db = require("../models");
const { validationResult } = require("express-validator");

const ModelosController = {
    listar: async (req, res) => {
        const modelos = await db.Modelo.findAll({ include: ["marca"] });

        res.render("admin/modelos/index", { title: "Modelos", modelos: modelos });
    },

    cadastrar: async (req, res) => {
        const marcas = await db.Marca.findAll();
        const modelo = { marca: {} };
        const errors = req.flash("errors");

        res.render("admin/modelos/form", {
            formAction: "/admin/modelos/cadastrar",
            modelo: modelo,
            marcas: marcas,
            buttonMessage: "Cadastrar",
            errors: errors,
            title: "Cadastrar modelo"
        });
    },

    acaoCadastrar: async (req, res) => {
        const { nome, marca } = req.body;
        const results = validationResult(req);
        if (!results.isEmpty()) {
            req.flash("errors", results.errors);
            return res.redirect("/admin/modelos/cadastrar");
        }

        await db.Modelo.create({
            nome: nome,
            marca_id: marca
        });

        res.redirect("/admin/modelos");
    },

    editar: async (req, res) => {
        const { idModelo } = req.params;

        const modelo = await db.Modelo.findByPk(idModelo, { include: ["marca"] });
        const marcas = await db.Marca.findAll();
        const errors = req.flash("errors");

        res.render("admin/modelos/form", {
            formAction: "/admin/modelos/alterar/" + idModelo,
            modelo: modelo,
            marcas: marcas,
            buttonMessage: "Alterar",
            errors: errors,
            title: "Alterar modelo"
        })
    },

    acaoEditar: async(req, res) => {
        const { nome, marca } = req.body;
        const { idModelo } = req.params;

        const results = validationResult(req);
        if (!results.isEmpty()) {
            req.flash("errors", results.errors);
            return res.redirect("/admin/modelos/alterar/" + idModelo);
        }

        await db.Modelo.update({
            nome: nome,
            marca_id: marca
        }, { where: {
            id: idModelo
        }});

        res.redirect("/admin/modelos");
    },

    excluir: async(req, res) =>{
        const { idModelo } = req.params;

        await db.Modelo.destroy({where: { id: idModelo }});

        res.redirect("/admin/modelos");
    }
}

module.exports = ModelosController;