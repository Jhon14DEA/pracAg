import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Product } from '../domain/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // firebase una base de datos relacional trabaja con colecciones y para referisnos a las tablas escuando decimos firebase collection
  private productsCollection: AngularFirestoreCollection<Product>;
  private products: any;

  constructor(private afs: AngularFirestore) {
    this.productsCollection = afs.collection<Product>('products');
    // sirve para devolver los valores con el metodo valueChanges sirvepara recucperar los datos de la base de datos
    this.products = this.productsCollection.valueChanges();
    console.log(this.products)
  }
  // sirve para agregar un producto en tipo JSON pero sin agregar un identificador
  addProduct(product: Product) {
    this.productsCollection.add(Object.assign({}, product));
  }

  // AQUI podemos controlar el identificador le decimos cual es el identificador
  addProduct2(product: Product) {
    const id = this.afs.createId();
    product.uid = id;
    this.productsCollection.doc(id).set(Object.assign({}, product));
  }

  getProducts() {
    return this.products;
  }
  
  getProductPrice(price: number) {
    return this.afs.collection<Product>('products', 
      ref => ref.where('price', '>', price)).valueChanges();
  }
}

