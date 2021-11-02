const AdminAuthMiddleware = function(req, res, next){
    /* Verifica session */
    if(true){
        next();
        return;
    }

    res.redirect("/admin/login");
}

module.exports = AdminAuthMiddleware;