var mysql = require("mysql"); 

var connection = mysql.createConnection({
 port: 3306,
 host: "localhost", 
 user: "root", 
 password: "", 
 database: "realestate_db",
})

connection.connect(function (err) {
  if (err) {
    console.log("ERROR: MYSQL connection error -- " + err.stack + "\n\n");
    return;
  }
    console.log("Connected to MYSQL database as ID " + connection.threadId + "\n\n");
});

module.exports = connection;