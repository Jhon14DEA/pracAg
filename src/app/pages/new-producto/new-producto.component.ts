import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/domain/product';
import { ProductsService } from 'src/app/services/product.service';

@Component({
  selector: 'app-new-producto',
  templateUrl: './new-producto.component.html',
  styleUrls: ['./new-producto.component.scss']
})
export class NewProductoComponent implements OnInit {

  product: Product = new Product();

  constructor(private router: Router,
    private productService: ProductsService) { 
    
  }

  ngOnInit(): void {
  }

  goNewProduct(){
    this.router.navigate(['products/list'])
  }

  save(){
    this.productService.addProduct(this.product);
    this.product = new Product()
  }
  
  save2(){
    this.productService.addProduct2(this.product);
    this.product = new Product()
  }
}
