const express = require('express');
const models = require('../models/data.js');
var router = express.Router();
var path = require("path");

const itemLayout = ['item_name', 'description', 'supplier_id', 'units_pllt', 'prj_units'];

router.get('/getall', function(req, res){
    let allThings=
    {
        items:[],
        supplier: [],
    };
    models.items.all((results)=>
    {
        allThings.items = results;

        models.suppliers.all((results)=>
        {
            allThings.supplier = results;
            console.log(JSON.stringify(allThings));
            res.json(JSON.stringify(allThings));
        });
    });
});

router.get('/allocation/:supplierId', function(req, res){
    if(isNaN(parseInt(req.params.supplierId)))
    {
        models.items.truckCount(req.params.supplierId, (results)=>
        {
            res.render('', results)
        });
    }else
    {
        res.send(`supplier id: ${req.params.supplierId} is not a number. `)
    }
    // all items and suppliers returned to homepage

});

router.post("/api/add/:obj", function(req, res) {

    if(req.params.obj === 'item')
    {
        models.items.create(itemLayout, [req.body.item_name, req.body.description, req.body.supplier_id, req.body.units_pllt, req.body.prj_units], (results)=>
        {
            res.send(results)
        });
    }else if(req.params.obj === 'supplier')
    {
        models.items.create(['supplier_name', 'address'], [req.body.supplier_name, req.body.address], (results)=>
        {
            res.send(results)
        });
    }
});

router.put("/api/update/:obj", function(req, res) {
    if(req.params.obj === 'item') 
    {
        models.items.update(()=>
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

    if(req.params.obj === 'item')
    {
        models.items.delete(`item_id = ${req.params.id}`,  (results)=>
        {
            res.send(results);
        });
    }else if(req.params.obj === 'supplier')
    {
        models.suppliers.delete(`supplier_id = ${req.params.id}`,  (results)=>
        {
            res.send(results);
        }); 
    }
});



  module.exports = router;