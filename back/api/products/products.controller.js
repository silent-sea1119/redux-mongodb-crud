'use strict';

const Product = require('../products/products.model');

module.exports = {
      index: (req, res) => {
          Product
          .find({})
          .exec((err, productDetails)=>{
               if (err) {
                   res.status(500).json({message : err})
               }
res.status(200).json({ message: "Product Details fetched Successfully", data : productDetails});
          })
      },
      retrieve: (req, res) => {
           const productId = req.params.id;
           Product
           .findOne({_id:productId})
           .exec((err, productDetails)=>{
                if (err) {
                    res.status(500).json({message : err})
                }
                
                res.status(200).json({ message: "Product Details fetched Successfully", data : productDetails});
           })
       },
       create: (req, res) => {
           Product.create(req.body, (err, productDetails) => {
                if (err) {
                     res.status(500).json({message : err})
                }
                res.status(201).json({ message: "Product Created Successfully", data : productDetails});
           })
       },
       update: (req, res)=>{
            const productId = req.params.id;
            Product
            .findByIdAndUpdate(productId, { $set: req.body })
            .exec((err, productDetails) => {
                 if (err) res.status(500).json({message : err})
                 res.status(200).json({ message: "Product updated"});
            })
       },
       delete: (req, res)=>{
            const productId = req.params.id;
            Product
            .findByIdAndUpdate(productId, { $set: { is_active: false}})
            .exec((err, productDetails) => {
                 if (err) res.status(500).json({message : err})
            
                 res.status(200).json({ message: "Product Deleted"});
             })
       }
}