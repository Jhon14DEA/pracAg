import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-producto',
  templateUrl: './list-producto.component.html',
  styleUrls: ['./list-producto.component.scss']
})
export class ListProductoComponent implements OnInit {

  products: any;

  // cuando estan dentro del constructor se combierten en variables globales
  constructor(private router: Router,
    private productService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts()
  }
  goListProduct(){
    this.router.navigate(['products/new'])
  }

}
