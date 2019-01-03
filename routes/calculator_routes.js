var db = require("../models");

module.exports = function (app) {
  app.get("/api/Project", function (req, res) {
    var query = {};
    if (req.query.User_id) {
      query.UserId = req.query.User_id;
    }
    db.project.findAll({
      where: query,
      include: [db.User_id]
    }).then(function (dbProject) {
      res.json(dbProject);
    });
  });

  app.get("/api/Project/", function (req, res) {
    db.Project.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function (dbProject) {
      res.json(dbProject);
    });
  });

  app.post("/api/Project", function (req, res) {
    db.Project.create(req.body).then(function (dbProject) {
      res.json(dbProject);
    });
  });

  app.delete("/api/Project/:id", function (req, res) {
    db.Project.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbProject) {
      res.json(dbProject);
    });
  });

  app.put("/api/Project", function (req, res) {
    db.Project.update(
      req.body, {
        where: {
          id: req.body.id
        }
      }).then(function (dbProject) {
      res.json(dbProject);
    });
  });
};