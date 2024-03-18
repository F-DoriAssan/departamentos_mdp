var express = require('express');
var router = express.Router();

const cityDepartamentsControlllers = require("../../controllers/departaments/cityDepartamentsControlllers")

/* GET departaments listing. */
router.get('/', cityDepartamentsControlllers.getAll);

/* GET departaments GETBYID DATOS. */
router.get('/:id', cityDepartamentsControlllers.getById);


/* POST departaments CREATE ID. */
router.post('/', 
(req, res, next) => req.app.verifyToken(req, res, next), //Validacion de Token
cityDepartamentsControlllers.create);

/* PUT departaments  UPDATE. */
router.put('/:id', 
(req, res, next) => req.app.verifyToken(req, res, next), //Validacion de Token
cityDepartamentsControlllers.update)

/* DELETE departaments REMOVE . */
router.delete('/:id', 
(req, res, next) => req.app.verifyToken(req, res, next), //Validacion de Token
cityDepartamentsControlllers.remove)

module.exports = router;
