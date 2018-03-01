const mongoose= require('mongoose');
const config= require('../config/database');

// Product Schema
const productSchema= mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  ref: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }

});

// Exports Product Schema
const Product= module.exports= mongoose.model('Product', productSchema);

// Get Product By Id
module.exports.getProduitById= function(id, callback){
  Product.findById(id, callback);
};
// Get All Products
module.exports.getAll= function(callback){
  Product.find({}, callback);
}
// Update Product
module.exports.updateProduct= function(id, prod, options, callback){
  var req = {
   _id: id
 };
 var updateProd = {
   _id: id,
   name: prod.name,
   ref: prod.ref,
   description: prod.description
 }
 Product.findOneAndUpdate(req, updateProd, options, callback);
}
// Delete Product
module.exports.deleteProduct= function(id, callback){
  var req = {
    _id: id
  };
  Product.remove(req, callback);
}

// Create Product
module.exports.addProduct= function(newProduct, callback){
  newProduct.save(callback);
};
