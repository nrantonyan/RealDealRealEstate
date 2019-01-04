var db = require("../models");

exports.index = function (req, res) {
  res.render('calculator/info');

};

exports.info = function (req, res) {
  res.render('calculator/purchase');
};

// exports.purchase = function (req, res) {
//     res.render('calculator/purchase');
// };

// exports.costs = function (req, res) {
//     res.render('calculator/costs');
// };



exports.purchase = function (req, res) {
  // console.log(req.user);
  // req.body.UserId = req.user.id;

  db.project.create(req.body).then(function (dbPost) {
    res.json(dbPost);
  });
};