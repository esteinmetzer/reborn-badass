const express = require('express');
const models = require('../models/data.js');
const itemModel = models.items
const supplierModel = models.suppliers
var router = express.Router();

router.get('/', function(req, res){
    //read code here
    res.render('index');
    // all items and suppliers returned to homepage
});

router.post("/api/add/:obj", function(req, res) {
    //create code here
    const obj = req.body;
    console.log(obj);

    res.send(`'add' called with obj: ${obj}`);

});

router.post("/api/update/:obj", function(req, res) {
    //Update code here
    const obj = req.body;
    console.log(obj);

    res.send(`'Update' called with obj: ${obj}`);

});

router.delete('/api/delete/:obj', function(req, res){
    const obj = req.body;
    const id = req.body;
    console.log(`obj = ${obj}  id = ${id}`);

    res.send(`'delete' called with obj: ${obj} and id: ${id}`);
});

  module.exports = router;