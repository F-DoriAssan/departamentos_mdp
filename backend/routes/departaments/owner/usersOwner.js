var express = require('express');
var router = express.Router();

const usersOwnerControllers = require("../../../controllers/departaments/owner/usersOwnerControllers")

/* GET departaments listing. */
router.get('/', usersOwnerControllers.getAll);

/* GET departaments GETBYID DATOS. */
router.get('/:id', usersOwnerControllers.getById);


/* POST departaments CREATE ID. */
router.post('/', 
(req, res, next) => req.app.verifyToken(req, res, next), //Validacion de Token
usersOwnerControllers.create);

/* PUT departaments  UPDATE. */
router.put('/:id', 
(req, res, next) => req.app.verifyToken(req, res, next), //Validacion de Token
usersOwnerControllers.update)

/* DELETE departaments REMOVE . */
router.delete('/:id', 
(req, res, next) => req.app.verifyToken(req, res, next), //Validacion de Token
usersOwnerControllers.remove)

module.exports = router;
