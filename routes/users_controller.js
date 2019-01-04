var db = require('../models');

exports.registrationPage = function (req, res) {
    res.render('users/userinput')
};

exports.signOutUser = function (req, res) {
    // req.logOut();
    // res.redirect('/');
};

//user log-in
exports.loginUser = function (req, res) {
    res.json('/');
};

//user register
exports.signUpUser = function (req, res) {
    db.User.findAll({
        where: {
            username: req.body.username
        }
    }).then(function (users) {
        if (users.length > 0) {
            res.json({
                duplicateUser: true
            });
        } else {
            db.User.create({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            }).then(function () {
                res.send({
                    redirect: '/'
                });
            }).catch(function (err) {
                res.json(err);
            })
        }
    })
}