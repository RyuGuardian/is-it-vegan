var express = require('express');
var jsonParser = require('body-parser').json();

var handleError = require(__dirname + '/../lib/handle_error');


var upcRoute = module.exports = exports = express.Router();

upcRoute.get('/scan', function(req, res) {
  //TODO: take req.upc, use Nutritionix API
  //TODO: scan ingredients for animal-products
});
