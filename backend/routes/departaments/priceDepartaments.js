var express = require('express');
var router = express.Router();

const priceDepartamentsControlllers = require("../../controllers/departaments/priceDepartamentsControlllers")

/* GET departaments listing. */
router.get('/', priceDepartamentsControlllers.getAll);

/* GET departaments GETBYID DATOS. */
router.get('/:id', priceDepartamentsControlllers.getById);


/* POST departaments CREATE ID. */
router.post('/', 
(req, res, next) => req.app.verifyToken(req, res, next), //Validacion de Token
priceDepartamentsControlllers.create);

/* PUT departaments  UPDATE. */
router.put('/:id', 
(req, res, next) => req.app.verifyToken(req, res, next), //Validacion de Token
priceDepartamentsControlllers.update)

/* DELETE departaments REMOVE . */
router.delete('/:id', 
(req, res, next) => req.app.verifyToken(req, res, next), //Validacion de Token
priceDepartamentsControlllers.remove)

module.exports = router;
