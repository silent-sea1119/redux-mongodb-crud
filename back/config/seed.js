/**
* Populate DB with sample data on server start
* to disable, edit config/environment/index.js, and set `seedDB: false`
*/
'use strict';
// Insert seed models below
var User = require('../api/users/users.model');
var Vendor = require('../api/vendors/vendors.model');
var Product = require('../api/products/products.model');
const Vendors = require('./Vendors');
const Products = require('./Products');

User.countDocuments({}).exec((err, count) => {
    if (err) {
         console.error(err);
         return;
    }
    if (count == 0) {
       User.create({
            name : 'Allen',
            username : 'allen',
            password : 'vendoradmin'
       }, (err, seedUser) => {
            if (err) {
                console.error(err);
                return;
            }
           console.log("Seed superuser created");
       })
    }
})

Vendor.remove({}).exec();
Vendor.countDocuments({}).exec((err, count) => {
    if (err) {
         console.error(err);
         return;
    }
    if (count == 0) {
        Vendor.insertMany(Vendors, (err, seedVendors) => {
            if (err) {
                console.error(err);
                return;
            }
           console.log("Seed vendors created");
       })
    }
})

Product.remove({}).exec();
Product.countDocuments({}).exec((err, count) => {
    if (err) {
         console.error(err);
         return;
    }
    if (count == 0) {
        Product.insertMany(Products, (err, seedProducts) => {
            if (err) {
                console.error(err);
                return;
            }
           console.log("Seed products created");
       })
    }
})