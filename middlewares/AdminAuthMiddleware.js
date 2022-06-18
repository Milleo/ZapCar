const AdminAuthMiddleware = function(req, res, next){
    /* Verifica session */
    if(typeof req.session.zapCarAdminUser === "undefined"){
        res.redirect("/admin/login");
        return;
    }
    
    next();
}

module.exports = AdminAuthMiddleware;