import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductsService } from 'src/app/services/products/products.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  public products: Product[] = [];
  public nums:number[];
  public selectedQuantity:number;

  constructor(private productsService: ProductsService, private cartService:CartService) { 
    this.productsService.getProducts().subscribe((data:Product[]) => {
      console.log(data);
      this.products=data;
  });       
  this.nums = productsService.getNums();
  }

  ngOnInit(): void {
   
  }

  public addToCart(product:Product){
    this.selectedQuantity = product.quantity;
    console.log(this.selectedQuantity);
    console.log(product);
    if (this.selectedQuantity > 0) {
    this.cartService.addToCart(product, this.selectedQuantity);
    }
    console.log(this.cartService.getCartProducts());
    alert(`Added to Cart!`);
  }

}
