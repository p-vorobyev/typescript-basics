import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../product";
import {Observable} from "rxjs";

@Component({
  selector: 'product-page',
  template: `
    <h1>Products:</h1>
    <div>
      <li *ngFor="let p of products$ | async">
        {{p.title}}: {{p.price | currency}}
      </li>
    </div>
  `,
  styles: [
  ]
})
export class ProductComponent implements OnInit {

  // @ts-ignore
  product: Product;

  // @ts-ignore
  products$: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.productService = productService;
  }

  ngOnInit(): void {
    this.product = this.productService.getProduct();
    this.products$ = this.productService.getProducts();
  }

}
