import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private cartService: CartService, private router: Router) {}

  public totalitem = 0;
  public searchTerm = '';
  public userName!: string | null;

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((data) => {
      this.totalitem = data.length;
    });
    this.userName = localStorage.getItem('UserName');
  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.cartService.search.next(this.searchTerm);
  }

  logout() {
    localStorage.removeItem('UserName');
    this.userName = '';
  }

  login() {
    this.router.navigate(['login']);
  }
}
