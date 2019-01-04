var db = require("../models");

exports.index = function(req, res) {
    res.render('calculator/info');

};

// exports.info =function(req, res) {
//     db.Project.create ({
//      ProjectName: req.body.ProjectName, 
//      ProjectAddress: req.body.ProjectStreet,
//      ProjectCity: req.body.ProjectCity,
//      ProjectState: req.body.ProjectState,
//      ProjectZip: req.body.ProjectZip
//     }).then(function(dbPost){
//       res.json(dbPost);
//       res.render('calculator/purchase');
//     });
// };

// exports.purchase = function (req, res) {
//     res.render('calculator/purchase');
// };

// exports.costs = function (req, res) {
//     res.render('calculator/costs');
// };

exports.Purchase = function (req, res) {
  // console.log(req.user);
  // req.body.UserId = req.user.id;

  db.project.create(req.body).then(function (dbPost) {
    res.json(dbPost);
  });
};