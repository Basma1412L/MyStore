import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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
  @Output() addedQuantity: EventEmitter<number> = new EventEmitter();
  @Output() addedProduct: EventEmitter<Product> = new EventEmitter();

  constructor(private cartService: CartService) { 
    this.selectedQuantity=0;
  }

  ngOnInit(): void {
    this.selectedQuantity=0;
  }

  public addToCart(product:Product){
    console.log(this.selectedQuantity);
    product.quantity=this.selectedQuantity;
    this.addedProduct.emit(product);
  }

  changeProductQuantity (event: any) {
    this.selectedQuantity = event;

  }

}
