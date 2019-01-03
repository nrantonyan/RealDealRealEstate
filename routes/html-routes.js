var path = require("path");

// routes
module.export = function (app) {
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/results.html"));
  });
  app.get("/info", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/info.html"));
  });
  app.get("/costs", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/costs.html"));
  });
  app.get("/purchase", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/purchase.html"));
  });
  app.get("/results", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/results.html"));
  });
};