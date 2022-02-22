import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { UserService } from 'src/app/services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products:Product[];
  public nums:number[];
  fullname: string;
  creditcard: string;
  address: string;
  user: User;
  ordercost: number;
  currentQuantity: number;
  constructor(private cartService: CartService, private router:Router, private productsService: ProductsService
    ,private userService: UserService) { 
    this.products = this.cartService.getCartProducts();
  this.nums = productsService.getNums();
  this.ordercost = this.cartService.getTotalPrice();
  }

  ngOnInit(): void {
    this.fullname="";
    this.address="";
    this.creditcard="";
  }

  onSubmit(): void {
    const id = this.userService.getId();
    this.user={id:id.toString(), name: this.fullname, address: this.address, creditcard:this.creditcard, ordercost:this.ordercost};
    this.userService.setUser(this.user);
    this.router.navigate(['/confirmation']);
  }

  changeProductQuantity (event: any, product:Product) {
    this.cartService.addToCart(product, Number(event)-Number(product.quantity));
    this.ordercost = this.cartService.getTotalPrice();

  }

  removeFromCart(product: Product){
    this.cartService.removeProduct((product.id)-1);
    this.products = this.cartService.getCartProducts();
    this.ordercost = this.cartService.getTotalPrice();
    alert(`Removed from Cart!`);
  }
}
