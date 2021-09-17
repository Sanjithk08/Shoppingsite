import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [
    {id:1, productId:1, productName: 'item 1',qty: 4, price:1000},
    {id:2, productId:2, productName: 'item 2',qty: 1, price:2000},
  ];
  cartTotal=0
  constructor() { }

  ngOnInit() {
    this.cartItems.forEach(item =>{
      this.cartTotal+=(item.qty * item.price)
    })
  }

}
