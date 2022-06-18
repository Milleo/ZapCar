const db = require("../models");
const bcrypt = require("bcrypt");

const AuthController = { 
    login: (req, res) => {
        res.render("admin/login");
    },
    loginAcao: async (req, res) => {
        const { email, password } = req.body;
        
        const usuarioEncontradoDS = await db.Usuario.findOne({ where: { email: email } });
        if(usuarioEncontradoDS == null){
            res.redirect("/admin/login");
            return;
        }

        const usuarioEncontrado = usuarioEncontradoDS.dataValues;
        if(!bcrypt.compareSync(password, usuarioEncontrado.senha)){
            res.redirect("/admin/login");
            return;
        }

        req.session.zapCarAdminUser = usuarioEncontrado;
        res.redirect("/admin/");
    },
    logout: (req, res) => {
        req.session.destroy();
        res.redirect("/admin/login");
    }
}

module.exports = AuthController;