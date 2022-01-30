import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public products: Product[];

  constructor() { 
    this.products = [];
  }

  public getCartProducts(){
    return this.products;
  }

  public setCartProducts(products:Product[]){
    this.products=products;
  }


  public addToCart(product:Product, quantity:number){
    const productIndex = this.products.findIndex((o) => o.id === product.id);
    if (productIndex === -1) {
      product.quantity = quantity;
      this.products.push(product);
    } else {
      this.products[productIndex].quantity  = Number(this.products[productIndex].quantity) + Number(quantity);   
    }
  }

  public changeProductQuantity(id:number, quantity:number){
    this.products[id].quantity=quantity;
  }

  public removeProduct(id:number){
    console.log(id);
    this.products.splice(id,1);
  }

  public clearCart(){
    this.products = [];
  }

  public getTotalPrice() {
    let total = 0;
    this.products.forEach(function (product) {
      total+=Number(product.quantity)*Number(product.price);
    });
    return total;
  }
  
}
