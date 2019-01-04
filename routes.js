module.exports = function(app){

    const application = require('./routes/application');
    const calculatorForm = require('./routes/calculatorForm');
    // const users = require("/routes/users");



    app.use('/', application);
    app.use('/project', calculatorForm);
    // app.use('/users', users);
    
}