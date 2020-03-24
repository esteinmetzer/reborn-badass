const express = require('express');
const models = require('../models/burger.js');
const itemModel = models.items
const supplierModel = models.suppliers
var router = express.Router();

router.get('/', function(req, res){
    //call both models and combine and send to front end
    res.render();
    // all items and suppliers returned to homepage
    res.send(`'homepage'`);

});

router.post("/api/add/:dataType", function(req, res) {

    if(req.params.dataType === req.body.dataType)
    {
        //orm call to add new data

        //call back code:
        // res.send(`'add' called with obj: ${req.body}`);
    }else
    {
        res.send("Error: please submit a valid dataType");
    }
});

router.put("/api/update/:dataType", function(req, res) {
    //Update code here
    if(req.params.dataType === req.body.dataType)
    {
        //orm call to update data

        //call back code:
        // res.send(`'update' called with obj: ${req.body}`);
    }else
    {
        res.send("Error: please submit a valid dataType");
    }
});

router.delete('/api/delete/:dataType', function(req, res){

    if(req.params.dataType === req.body.dataType)
    {
        //orm call to delete data

        //call back code:
        // res.send(`'Delete' called with obj: ${req.body}`);
    }else
    {
        res.send("Error: please submit a valid dataType");
    }
});

  module.exports = router;