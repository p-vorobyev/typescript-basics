import { Injectable } from '@angular/core';
import {Product} from "./product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export abstract class ProductService {
  abstract getProduct(): Product;
  abstract getProducts(): Observable<Product[]>;
}

@Injectable()
export class ProductServiceImpl extends ProductService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  getProduct(): Product {
    return {id: 0, title: 'Iphone 12', description: 'An Apple Smartphone', price: 1100}
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('/data/products.json')
  }

}
