import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private api: ApiService, private cartService: CartService) {}

  productList: any;
  public searchKey = '';
  public filterCategory: any;

  ngOnInit(): void {
    this.api.getProduct().subscribe((data) => {
      this.productList = data;
      this.filterCategory = data;
      this.productList.forEach((element: any) => {
        if (
          element.category === "women's clothing" ||
          element.category == "men's clothing"
        ) {
          element.category = 'fashion';
        }
      });
    });
    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }

  addToCart(item: any) {
    this.cartService.addtoCart(item);
  }

  filter(category: string) {
    this.filterCategory = this.productList.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    });
  }
}
