module.exports = function(app){

    const application = require('./routes/application');
    const calculatorForm = require('./routes/calculatorForm');



    app.use('/', application);
    app.use('/project', calculatorForm);
    
}