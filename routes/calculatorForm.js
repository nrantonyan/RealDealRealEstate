var express = require('express');
var router  = express.Router();

var calculator_controller = require('../controllers/calculator_controller');

router.get("/info", calculator_controller.createProject);
// router.get("/purchase", calculator_controller.createProject);
// router.get("/costs",calculator_controller.createProject);

router.post("/", calculator_controller.createProject);

module.exports = router;