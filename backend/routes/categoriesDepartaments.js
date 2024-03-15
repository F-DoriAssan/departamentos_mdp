var express = require('express');
var router = express.Router();
const categoriesDepartamentsController = require("../controllers/categoriesDepartamentsController")

router.get('/', categoriesDepartamentsController.getAll);
router.post('/', categoriesDepartamentsController.create);
module.exports = router;