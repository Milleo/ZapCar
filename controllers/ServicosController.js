const db = require("../models");

const ServicosController = {
    listar: async (req, res) => {
        const servicos = await db.Servico.findAll();

        res.render("admin/servicos/index", { servicos: servicos, title: "Serviços" });
    },

    cadastrar: (req, res) => {
        res.render("admin/servicos/form", { formAction: "/admin/servicos/cadastrar", servico: {}, title: "Serviços", buttonMessage: "Cadastrar" });
    },

    acaoCadastrar: async (req, res) => {
        const { nome, descricao, valor } = req.body;

        await db.Servico.create({
            nome: nome,
            descricao: descricao,
            valor: valor
        })

        res.redirect("/admin/servicos");
    },

    editar: async (req, res) => {
        const { idServico } = req.params;

        const servico = await db.Servico.findByPk(idServico);

        res.render("admin/servicos/form", {
            formAction: "/admin/servicos/alterar/" + idServico,
            servico: servico,
            buttonMessage: "Alterar",
            title: "Serviços"
        })
    },

    acaoEditar: async(req, res) => {
        const { nome, descricao, valor } = req.body;
        const { idServico } = req.params;

        await db.Servico.update({
            nome: nome,
            descricao: descricao,
            valor: valor
        }, { where: {
            id: idServico
        }});

        res.redirect("/admin/servicos");
    },

    excluir: async(req, res) =>{
        const { idServico } = req.params;

        await db.Servico.destroy({where: { id: idServico }});

        res.redirect("/admin/servicos");
    }
}

module.exports = ServicosController;