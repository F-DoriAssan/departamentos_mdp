var express = require('express');
var router = express.Router();

const departamentsControlllers = require("../controllers/departamentsController")

/* GET departaments listing. */
router.get('/', departamentsControlllers.getAll);

/* GET departaments GETBYID DATOS. */
router.get('/:id', departamentsControlllers.getById);


/* POST departaments CREATE ID. */
router.post('/', 
(req, res, next) => req.app.verifyToken(req, res, next), //Validacion de Token
departamentsControlllers.create);

/* PUT departaments  UPDATE. */
router.put('/:id', 
(req, res, next) => req.app.verifyToken(req, res, next), //Validacion de Token
departamentsControlllers.update)

/* DELETE departaments REMOVE . */
router.delete('/:id', 
(req, res, next) => req.app.verifyToken(req, res, next), //Validacion de Token
departamentsControlllers.remove)

module.exports = router;
