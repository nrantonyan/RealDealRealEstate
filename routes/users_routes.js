  var db = require("../models");

  module.exports = function (app) {
    app.get("/api/User", function (req, res) {

      db.User.fileAll({
        include: [db.Post]
      }).then(function (dbUser) {
        res.json(dbUser);
      });
    });

    app.get("/api/User/:id", function (req, res) {
      db.User.findOne({
        where: {
          id: req.params.id
        },
        include: [db.User]
      }).then(function (dbUser) {
        res.json(dbUser);
      });
    });

    app.post("/api/User", function (req, res) {
      db.User.create(req.body).then(function (dbUser) {
        res.json(dbUser);
      });
    });

    app.delete("/api/User/:id", function (req, res) {
      db.User.destory({
        where: {
          id: req.params.id
        }
      }).then(function (dbUser) {
        res.json(dbUser);
      });
    });

  };