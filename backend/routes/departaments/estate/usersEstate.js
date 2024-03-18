var express = require('express');
var router = express.Router();

const usersEstateControllers = require("../../../controllers/departaments/estate/usersEstateControllers")

/* GET departaments listing. */
router.get('/', usersEstateControllers.getAll);

/* GET departaments GETBYID DATOS. */
router.get('/:id', usersEstateControllers.getById);


/* POST departaments CREATE ID. */
router.post('/', 
(req, res, next) => req.app.verifyToken(req, res, next), //Validacion de Token
usersEstateControllers.create);

/* PUT departaments  UPDATE. */
router.put('/:id', 
(req, res, next) => req.app.verifyToken(req, res, next), //Validacion de Token
usersEstateControllers.update)

/* DELETE departaments REMOVE . */
router.delete('/:id', 
(req, res, next) => req.app.verifyToken(req, res, next), //Validacion de Token
usersEstateControllers.remove)

module.exports = router;
