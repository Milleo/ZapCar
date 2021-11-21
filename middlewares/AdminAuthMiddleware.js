const AdminAuthMiddleware = function(req, res, next){
    /* Verifica session */
    
    console.log(req.session);
    if(false && typeof req.session.zapCarAdminUser === "undefined"){
        res.redirect("/admin/login");
        return;
    }
    
    next();
}

module.exports = AdminAuthMiddleware;