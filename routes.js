module.exports = function(app){

    const application = require('./routes/application');
    const calculatorForm = require('./routes/calculatorForm');
    const usersForm = require("./routes/users_controller");


    app.use('/', application);
    app.use('/project', calculatorForm);
    app.use('/user', usersForm);
    
}