var express = require('express');
var router  = express.Router();

var calculator_controller = require('../controllers/calculator_controller');

router.get('/', calculator_controller.info);
router.post('/', calculator_controller.purchase);


module.exports = router;