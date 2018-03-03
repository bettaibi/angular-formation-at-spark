import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { RequestOptions } from '@angular/http';

@Injectable()
export class ProductService {
  // Property
  options;

  // Development Domain
  domain = "http://localhost:3000";
  // Constructor
  constructor(private http:Http) {}

  // Function To Create Headers
  createHeaders(){
   const token=localStorage.getItem('token');
    this.options= new RequestOptions({
      headers: new Headers({
        'Content-Type':'application/json'
        })
    });
  }

    // Create Product
    createProduct(produit){
    this.createHeaders();
    return this.http.post(this.domain+'/api/produit',produit, this.options)
    .map(res => res.json());
   }

   // Get Products
   getProducts(){
   this.createHeaders();
   return this.http.get(this.domain+'/api/produits', this.options)
   .map(res => res.json());
  }

  // Delete Product
  deleteProduct(id){
  this.createHeaders();
  return this.http.delete(this.domain+'/api/produit/'+id, this.options)
  .map(res => res.json());
  }

  // Update Product
  updateProduct(id, produit){
  this.createHeaders();
  return this.http.put(this.domain+'/api/produit/'+id, produit, this.options)
  .map(res => res.json());
  }


}
