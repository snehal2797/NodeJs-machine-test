const mongoose = require('mongoose');

var Productlist = mongoose.model('Productlist', {
    productid: { type: Number },
    productname: { type: String },
    categoryid: { type: Number},
    categoryname: { type:String }
});

module.exports = { Productlist };