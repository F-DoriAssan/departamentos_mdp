var express = require('express');
var router = express.Router();

const usersDepartamentsControlllers = require("../../controllers/departaments/usersDepartamentsController")

/* GET departaments listing. */
router.get('/', usersDepartamentsControlllers.getAll);

/* GET departaments GETBYID DATOS. */
router.get('/:id', usersDepartamentsControlllers.getById);


/* POST departaments CREATE ID. */
router.post('/', 
(req, res, next) => req.app.verifyToken(req, res, next), //Validacion de Token
usersDepartamentsControlllers.create);

/* PUT departaments  UPDATE. */
router.put('/:id', 
(req, res, next) => req.app.verifyToken(req, res, next), //Validacion de Token
usersDepartamentsControlllers.update)

/* DELETE departaments REMOVE . */
router.delete('/:id', 
(req, res, next) => req.app.verifyToken(req, res, next), //Validacion de Token
usersDepartamentsControlllers.remove)

module.exports = router;
