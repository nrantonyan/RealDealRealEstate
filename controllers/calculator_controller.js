var db = require("../models");


exports.info = function (req, res) {
  res.render('calculator/info')
}

exports.purchase = function (req, res) {
  res.render('calculator/purchase')
}

exports.costs = function (req, res) {
  res.render('calculator/costs')
}



exports.createProject = function (req, res) {
  db.project.findAll({
    where: {
      projectName: req.body.projectName
    }
  }).then(function () {
    db.project.create({
      projectName: req.body.projectName,
      projectAddress: req.body.projectAddress,
      projectCity: req.body.projectCity,
      projectState: req.body.projectState,
      projectZip: req.body.projectZip
    }).then(function () {
      info.save();
    }).catch(function(err) {
      res.json(err);
    }).finally(function () {
      db.sequelize.close();
    });

  })
};