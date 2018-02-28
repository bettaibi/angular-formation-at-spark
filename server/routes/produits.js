const express= require('express');
const router= express.Router();
const Product= require('../models/produit');
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
router.post('/produit', (req, res, next)=>{
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
      res.json({success: true, message:'Product created'});
    }
  })
});

// Update produit
router.put('/produit/:id', (req, res, next)=>{
  var prod = req.body;
  Product.updateProduct(req.params._id, prod, {}, (err, produit) => {
    if (err) throw err;
    else {
      res.json({success: true, message:'Product updated', data: produit});
    }
  });
});

// Delete Produit
router.delete('/produit/:id', (req, res, next)=>{
  Product.deleteProduct(req.params._id, (err, produit) => {
    if (err) throw err;
    else {
        res.json({success: true, message:'Product deleted', data: produit});
    }
  });
});

module.exports= router;
