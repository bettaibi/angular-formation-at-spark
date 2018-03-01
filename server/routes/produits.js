const express= require('express');
const router= express.Router();
const Product= require('../models/produit');
const config = require('../config/database');
// Get Produits
router.get('/produits', (req, res, next)=>{
  Product.getAll((err,products) =>{
    if(err){
      res.json({success: false, message: 'Failed to get Products list'});
      console.log(err);
    }
    else{
      res.json({success: true, message:'Products list', data: products});
    }
  });
});

// Create New Produit
router.post('/produit', (req, res) =>{
  let newProduct= new Product({
    name: req.body.name,
    ref: req.body.ref,
    description: req.body.description
  });
  Product.addProduct(newProduct, (err, product)=> {
    if(err){
      res.json({success: false, message: 'Failed to add product'});
    }
    else{
      res.json({success: true, message:'Product created', data: product});
    }
  })
});

// Update produit
router.put('/produit/:id', (req, res, next)=>{
  var prod = req.body;
  Product.updateProduct(req.params.id, prod, {}, (err, produit) => {
    if (err){
      console.log(err);
      res.json({success: false, message: 'Failed to update product'});
    }
    else {
      var updatedProduct={
        _id: req.params.id,
        name: prod.name,
        ref: prod.ref,
        description: prod.description
      };
      console.log(produit);
      res.json({success: true, message:'Product updated', data: updatedProduct});
    }
  });
});

// Delete Produit
router.delete('/produit/:id', (req, res, next)=>{
  var id= req.params.id;
  console.log(id);
  Product.deleteProduct(id, (err, produit) => {
    if (err) throw err;
    else {
        res.json({success: true, message:'Product deleted', data: produit});
    }
  });
});

module.exports= router;
