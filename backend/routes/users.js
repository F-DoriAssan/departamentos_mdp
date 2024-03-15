var express = require('express');
var router = express.Router();

const usersController = require("../controllers/usersController")

/* GET users listing. */
router.get('/', usersController.getAll);

/**GET users ID */
router.get("/:id", usersController.getById);

/* POST users ID. */
router.post("/", usersController.create);
/* POST users LOGIN. */
router.post("/login", usersController.login);

/* PUT users listing. */
router.put('/:id', usersController.update)

/* DELETE users . */
router.delete('/:id', usersController.remove)

module.exports = router;
