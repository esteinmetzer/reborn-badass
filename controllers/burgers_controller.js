const express = require('express');
const models = require('../models/burger.js');
const itemModel = models.items
const supplierModel = models.suppliers
var router = express.Router();

router.get('/', function(req, res){
    burgerModel.all(function(data){
        var hbsObject ={
            burgerdb: data
        };
        res.render('index', hbsObject)
    });
});
router.post("/api/burgers", function(req, res) {

    burgerModel.create([
      "burger_name", "devoured"
    ], [
      req.body.name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new burger
      res.json({ id: result.insertId });
    });
  });

  router.put('/api/burgers/:id', function(req, res){
      burgerModel.update(
          {devoured: req.body.devoured}, id = req.params.id, function(result){
              if(result.changedrows == 0){
                  return res.status(404).end();
              } else{
                  res.status(200).end();
              }
          }
          )
  })


  module.exports = router;