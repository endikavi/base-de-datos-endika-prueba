var express = require('express');
var router = express.Router();

/* GET prueba page. */
router.get('/', function(req, res, next) {
  res.render('prueba', { Estado: 'Activa' });
});

module.exports = router;