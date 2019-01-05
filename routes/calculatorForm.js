var express = require('express');
var router  = express.Router();

var calculator_controller = require('../controllers/calculator_controller');


router.get("/", calculator_controller.info);
router.get("/info", calculator_controller.info);
router.get("/purchase", calculator_controller.purchase);
router.get("/costs",calculator_controller.costs);
router.get("/results", calculator_controller.results);

router.post("/info", calculator_controller.createProject);

module.exports = router;