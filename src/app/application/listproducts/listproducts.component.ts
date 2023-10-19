import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit{
  listproduit:Product[]=[];
  constructor(private productService:ProductService){}
  ngOnInit(): void {
    this.listproduit=this.productService.getProducts();
  }
  
}
