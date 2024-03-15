var express = require('express');
var router = express.Router();

/* GET products listing. */
router.get('/', function (req, res, next) {
    const art = [
        { id: 1, name: 'xxx@gmail.com', password: 2000 },
        { id: 2, name: 'xxx@gmail.com', password: 5000 },
        { id: 3, name: 'xxx@gmail.com', password: 5200 },
        { id: 4, name: 'xxx@gmail.com', password: 1000 },

    ]
    /** query paramiters */
    console.log(req.query)
    res.status(200).json(art);
});
/**DATOS POR ID */
router.get("/:id", function (req, res, next) {
  const productos = { id: 4, name: 'xxx@gmail.com', password: 1000  };
  console.log(req.params, req.params.id);
  res.status(200).json(productos);
});

/* POST products ID. */
router.post("/", function (req, res, next) {
  console.log(req.body);
  res.status(201).json(req.body);
});


/* PUT products listing. */

router.put('/:id', function (req, res, next) {

    console.log(req.body, req.params.id)
    res.status(201).json(req.body);

})

/* DELETE products . */


router.delete('/:id', function (req, res, next) {
    console.log(req.params.id);
    res.status(201).json(req.body);

})
module.exports = router;
