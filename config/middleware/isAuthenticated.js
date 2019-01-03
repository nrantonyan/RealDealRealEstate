module.exports = function(req, res, next) {

    if (req.user) {
        return next();
    }
    req.flash('unAuthenticated', "Sorry, you must be logged in.");
    return res.redirect("/")
};