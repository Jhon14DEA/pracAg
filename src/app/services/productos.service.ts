import { Injectable } from '@angular/core';
import { Product } from '../domain/product';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  products : Product[] = []

  constructor() { }

  saveProduct(product: Product){
    this.products.push(product);
  }

  getProducts(){
    return this.products
  }
}
