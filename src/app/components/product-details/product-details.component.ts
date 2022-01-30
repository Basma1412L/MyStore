import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';
import { ActivatedRoute } from '@angular/router';
import { ConsoleService } from '@ng-select/ng-select/lib/console.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public products: Product[];
  public nums:number[];
  public id:number;
  public product:Product;
  selectedQuantity: number;

  constructor(private productsService: ProductsService, private route: ActivatedRoute, private cartService: CartService) { 
    this.nums = this.productsService.getNums();
    this.route.params.subscribe( params => this.id =(params['id']));
    this.productsService.getProducts().subscribe((data:Product[]) => {
      this.products=data;
      this.product=this.products[this.id-1];
    });      
  }
  ngOnInit(): void {
    this.selectedQuantity=0;
  }

  public addToCart(product:Product){
    if (this.selectedQuantity > 0) {
      this.cartService.addToCart(product, this.selectedQuantity);
      alert(`Added to Cart!`);
    }
    console.log("Quantity should be more than 0");
  }

  changeProductQuantity (event: any) {
    this.selectedQuantity = event.target.value;
  }

}
