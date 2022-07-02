import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private api:ApiService,private cartService:CartService) { }


  productList:any;
  public searchKey:string = "";
  public filterCategory:any;
  ngOnInit(): void {
    this.api.getProduct().
    subscribe(res=>{
      this.productList = res;
      this.filterCategory = res
      this.productList.forEach((a:any)=>{
        if(a.category === "women's clothing" || a.category == "men's clothing"){
          a.category = "fashion";
        }
      })
    })
    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

  addToCart(item:any){
    this.cartService.addtoCart(item);
  }

  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

}
