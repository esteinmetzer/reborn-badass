const express = require('express');
const models = require('../models/data.js');
var router = express.Router();

router.get('/', function(req, res){
    //read code here
    res.render('index');
    // all items and suppliers returned to homepage

});

router.post("/api/add/:obj", function(req, res) {

    if(req.params.obj === 'item')
    {
        models.items.create(['item_name', 'description', 'supplier_id', 'units_pllt','prj_units'], ['Hammers', 'basic hammers in 10ct', 1, 100, 500], (results)=>
        {
            res.send(results)
        });
    }else if(req.params.obj === 'supplier')
    {
        models.items.create([], [], (results)=>
        {
            res.send(results)
        });
    }
});

router.put("/api/update/:obj", function(req, res) {
    if(req.params.obj === 'item') 
    {
        models.items.update({item_name : `'${req.params.name}'`}, `item_id =`, (results)=>
        {   
            res.send(results);
        }); 
    }else if(req.params.obj === 'supplier')
    {
        models.suppliers.update({item_name : `'${req.params.name}'`}, `supplier_id =`, (results)=>
        {   
            res.send(results);
        }); 
    }
});

router.delete('/api/delete/:obj/:id', function(req, res){

    if(obj === 'item')
    {
        models.items.delete(`item_id = ${req.params.id}`,  (results)=>
        {
            res.send(results);
        });
    }else if(obj === 'supplier')
    {
        models.suppliers.delete(`supplier_id = ${req.params.id}`,  (results)=>
        {
            res.send(results);
        }); 
    }
});



  module.exports = router;