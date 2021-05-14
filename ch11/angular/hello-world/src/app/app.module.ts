import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ProductService, ProductServiceImpl} from "./product.service";
import { ProductComponent } from './product/product.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  // singletons here. if we will inject it in component annotation then it will have own instance(not singleton)
  providers: [{provide: ProductService, useClass: ProductServiceImpl}],
  bootstrap: [AppComponent]
})
export class AppModule { }
