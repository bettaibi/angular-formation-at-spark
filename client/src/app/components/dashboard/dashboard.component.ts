import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../classes/product';
import { ProductService } from '../../services/product.service';
  @Component({
    moduleId: module.id,
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
  })

  export class DashboardComponent implements OnInit {
    products: any[]=[];
    id;
    index;
    product: Product= new Product();
    constructor(private router: Router, private productService: ProductService){}

    ngOnInit(){
      this.getProducts();
    }

    // Close  AsideBar
    closeAside(){
    document.getElementById("myAside").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
    }
    // Open AsideBar
    openNav() {
    document.getElementById("myAside").style.width = "300px";
    document.getElementById("main").style.marginRight = "300px";
    }

    // Create Product
    createProduct(){
      this.productService.createProduct(this.product).subscribe(data=>{
        console.log(data);
        this.products.push(data.data)
      });
    }
    // Get Products
    getProducts(){
      this.productService.getProducts().subscribe(data =>{
        this.products= data.data;
      })
    }

    deleteProduct(id, i){
      this.productService.deleteProduct(id).subscribe(data=>{
        console.log(data);
        this.products.splice(i, 1);
      });
    }

    // Update Product
    updateProduct(){
      this.productService.updateProduct(this.id, this.product).subscribe(data=>{
        console.log(data);
        this.products[this.index]= data.data;
      });
    }
    saveProductId(id, index){
      this.id= id;
      this.index= index;
      console.log(this.id);
    }


}
