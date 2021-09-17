import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  products: Product[]=[
    new Product(1, 'Product 1','This is the product 1',1000),
    new Product(2, 'Product 2','This is the product 2',2000),
    new Product(3, 'Product 3','This is the product 3',3000),
    new Product(4, 'Product 4','This is the product 4',4000),
    new Product(5, 'Product 5','This is the product 5',5000),
    new Product(6, 'Product 6','This is the product 6',6000),
    
  ]

  constructor() { }

  getProducts():Product[]{
    //TODO: Populate products from an API and return an Observable
    return this.products
  }
}
