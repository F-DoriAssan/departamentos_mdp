var express = require('express');
var router = express.Router();

/* GET banners listing. */
router.get('/', function(req, res, next) {
  res.send('BANNERS');
});

module.exports = router;
