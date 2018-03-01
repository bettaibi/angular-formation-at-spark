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




}
