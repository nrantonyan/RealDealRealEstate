var db = require("../models");

exports.createProject = function (req, res) {
  db.project.findAll({
    where: {
      projectName: req.body.projectName
    }
  }).then(function(project) {
    db.project.create ({
      projectName: req.body.projectName,
      
    })
  })
}