var express = require('express');
var router = express.Router();

const categoriesDepartamentsControllers = require("../../controllers/departaments/categoriesDepartamentsController")

/* GET departaments listing. */
router.get('/', categoriesDepartamentsControllers.getAll);

/* GET departaments GETBYID DATOS. */
// router.get('/:id', categoriesDepartamentsControllers.getById);


/* POST departaments CREATE ID. */
router.post('/', 
(req, res, next) => req.app.verifyToken(req, res, next), //Validacion de Token
categoriesDepartamentsControllers.create);

/* PUT departaments  UPDATE. */
// router.put('/:id', 
// (req, res, next) => req.app.verifyToken(req, res, next), //Validacion de Token
// categoriesDepartamentsControllers.update)

/* DELETE departaments REMOVE . */
// router.delete('/:id', 
// (req, res, next) => req.app.verifyToken(req, res, next), //Validacion de Token
// categoriesDepartamentsControllers.remove)

module.exports = router;
