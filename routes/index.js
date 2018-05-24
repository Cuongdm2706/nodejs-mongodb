var express = require('express');
var router = express.Router();
var mongoose= require('mongoose');


/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('../views/index', { title: 'Nodejs Express' });
  
});
module.exports = router;
