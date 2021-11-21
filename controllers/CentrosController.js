const db = require("../models");

const CentrosController = {
    listar: async (req, res) => {
        const centros = await db.Centro.findAll();
        console.log("ENDERECO", centros);
        res.render("admin/centros/index", { centros: centros });
    },
    cadastrar: (req, res) => {
        res.render("admin/centros/form", {
            formAction: "/admin/lojas/cadastrar",
            buttonMessage: "Cadastrar",
            centro: {}
        });
    },
    acaoCadastrar: async (req, res) => {
        const centroObj = {
            nome: req.body.nome,
            endereco: {
                logradouro: req.body.logradouro,
                numero: req.body.numero,
                complemento: req.body.complemento,
                bairro: req.body.bairro,
                cidade: req.body.cidade,
                estado: req.body.estado,
                cep: req.body.cep
            }
        }

        await db.Centro.create(centroObj, { include: [ "endereco" ] });

        res.redirect("/admin/lojas");
    },
    alterar: async (req, res) => {
        const centro = await db.Centro.findByPk(req.params.id);

        console.log(centro);

        res.render("admin/centros/form", {
            formAction: `/admin/lojas/alterar/${req.params.id}`,
            buttonMessage: "Atualizar",
            centro: centro
        });
    },
    acaoAlterar: async (req, res) => {
        const usuarioObj = {
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            ativo: (req.body.ativo == "on")
        }

        await db.Usuario.update(usuarioObj, { where: { id: req.params.id } });

        res.redirect("/admin/usuarios");
    },
    excluir: async (req, res) => {
        await db.Usuario.destroy({ where: { id: req.params.id } });
        res.redirect("/admin/usuarios");
    },
};

module.exports = CentrosController;