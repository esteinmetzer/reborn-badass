const express = require('express');
const models = require('../models/data.js');
var router = express.Router();
var path = require("path");

const itemLayout = ['item_name', 'description', 'supplier_id', 'units_pllt', 'prj_units'];

let CurrentItemId = '-1';
let currentSupplierId = -1;

router.get('/', function(req, res){

    res.sendFile(path.join(__dirname, '../html/index.html'));
});

router.post('/currentIds', function(req, res)
{
    console.log(req.body.itemId);
    CurrentItemId = req.body.itemId;


    console.log(CurrentItemId);
    currentSupplierId = req.body.supId; 
    console.log(currentSupplierId);
    res.send('updated');
});

router.get('/some', function(req, res){

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

router.get('/getall', function(req, res){
    let allThings=
    {
        items:[],
        supplier: [],
        currentItemId: CurrentItemId,
        currentSupplierId
    };
    console.log(allThings);
    models.items.all((results)=>
    {
        allThings.items = results;

        models.suppliers.all((results)=>
        {
            allThings.supplier = results;
            res.json(JSON.stringify(allThings));
        });
    });
});

router.get('/api/allocation', function(req, res){
        models.items.truckCount(currentSupplierId, (results)=>
        {
            results = JSON.stringify(results);
            console.log(results);
            res.send(results);
        });
    // all items and suppliers returned to homepage
});

router.get('/api/some/:type', function(req, res){
    if(req.params.type === "supplier")
    {
        models.suppliers.some(`supplier_id = ${currentSupplierId}`, (results)=>
        {
            res.send(results);
        });
    }else if(req.params.type === "item")
    {
        models.items.some(`item_id = ${CurrentItemId}`, (results)=>
        {
            res.send(results);
        });
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
        models.suppliers.create(['supplier_name', 'address'], [req.body.supplier_name, req.body.address], (results)=>
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

router.get('/:fileName', function(req, res){
    if(req.params.fileName == 'getall')
    {
        return;
    }

    res.sendFile(path.join(__dirname, `../html/${req.params.fileName}.html`));
});



  module.exports = router;