// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("./public"));

// Routes =============================================================

<<<<<<< HEAD
// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);
=======
require('./routes')(app);



  app.use(express.static("./public"));
  app.use(express.static('./assets/images')); 

>>>>>>> midnight-cleanup

  db.sequelize.sync({ force: false }).then(function(data, error) {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});
