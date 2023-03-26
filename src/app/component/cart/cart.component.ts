import {
  Component,
  OnInit,
  ɵisDefaultChangeDetectionStrategy,
} from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public products = [];
  public grandTotal = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((data) => {
      this.products = data;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }

  /*  Method For Making Cart Empty */
  emptyCart() {
    this.cartService.removeAllCart();
  }
}
