const express = require('express');
const burgerModel = require('../models/burger.js');
var router = express.Router();

router.get('/', function(req, res){

});

router.post("/api/burgers", function(req, res) {

  });

  router.put('/api/burgers/:id', function(req, res){

  });


  module.exports = router;