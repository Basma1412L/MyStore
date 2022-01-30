import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  @Input() nums: any;
  selectedQuantity: number;

  constructor(private cartService: CartService) { 
  }

  ngOnInit(): void {
    this.selectedQuantity=0;
  }

  public addToCart(product:Product){
    if (this.selectedQuantity > 0) {
    this.cartService.addToCart(product, this.selectedQuantity);
    }
    console.log(this.cartService.getCartProducts());
    alert(`Added to Cart!`);
  }

  changeProductQuantity (event: any) {
    this.selectedQuantity = event.target.value;
  }

}
