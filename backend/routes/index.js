var express = require('express');
var router = express.Router();

const departamentsControlllers = require("../controllers/departaments/departamentsControllers")

/* GET home page. */
router.get('/', departamentsControlllers.getAll);


module.exports = router;
