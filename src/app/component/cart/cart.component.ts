import { Component, OnInit } from '@angular/core';
import {CartService} from "../../service/cart.service"

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products:any = [];
  public grandTotal:number = 0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res)=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice(); 
    })
  }

  /* Method for Removing Specific Cart Items */
  removeItem(item:any){
    this.cartService.removeCartItem(item);
  }

 /*  Method For Making Cart Empty */
  emptyCart(){
    this.cartService.removeAllCart();
  }

}
