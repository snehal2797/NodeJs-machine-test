const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Productlist } = require('../models/productlist');


router.get('/', (req, res) => {
    Productlist.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Productlists :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Productlist.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var product = new Productlist({
        productid: req.body.productid,
        productname: req.body.productname,
        categoryid: req.body.categoryid,
        categoryname: req.body.categoryname,
    });
    product.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Productlist Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var product= {
        productid: req.body.productid,
        productname: req.body.productname,
        categoryid: req.body.categoryid,
        categoryname: req.body.categoryname,
    };
    Productlist.findByIdAndUpdate(req.params.id, { $set: product }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Productlist.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
}); 

module.exports=router;