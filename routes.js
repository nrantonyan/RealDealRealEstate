module.exports = function (app) {

    const application = require('./routes/application');
    const users = require("./routes/users");
    const calculatorForm = require('./routes/calculatorForm');


    app.use('/', application);
    app.use('/users', users);
    app.use('/project', calculatorForm);

}