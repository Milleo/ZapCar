const db = require("../models");
const bcrypt = require("bcrypt");

const UsuariosController = {
    listar: async (req, res) => {
        const usuarios = await db.Usuario.findAll();
        res.render("admin/usuarios/index", { usuarios: usuarios, title: "Usuários" });
    },
    cadastrar: (req, res) => {
        res.render("admin/usuarios/form", {
            formAction: "/admin/usuarios/cadastrar",
            buttonMessage: "Cadastrar",
            usuario: {},
            title: "Usuários"
        });
    },
    acaoCadastrar: async (req, res) => {
        const salt = bcrypt.genSaltSync(10);
        const senhaCriptografada = bcrypt.hashSync(req.body.senha, salt);

        const usuarioObj = {
            nome: req.body.nome,
            email: req.body.email,
            senha: senhaCriptografada,
            ativo: (req.body.ativo == "on")
        }

        await db.Usuario.create(usuarioObj);

        res.redirect("/admin/usuarios");
    },
    alterar: async (req, res) => {
        const usuario = await db.Usuario.findByPk(req.params.id);

        res.render("admin/usuarios/form", {
            formAction: `/admin/usuarios/alterar/${req.params.id}`,
            buttonMessage: "Atualizar",
            usuario: usuario
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

module.exports = UsuariosController;