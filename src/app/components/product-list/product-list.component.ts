import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  public products: Product[] = [];
  public nums:number[];

  constructor(private productsService: ProductsService) { 
    this.productsService.getProducts().subscribe((data:Product[]) => {
      console.log(data);
      this.products=data;
  });       
  this.nums = productsService.getNums();
  }

  ngOnInit(): void {
   
  }

}
