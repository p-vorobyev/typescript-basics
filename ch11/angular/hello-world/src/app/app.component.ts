import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Basic DI application</h1>
    <product-page></product-page>
    <forms-component></forms-component>
  `,
  styles: []
})
export class AppComponent {
  title = 'hello-world';
}
