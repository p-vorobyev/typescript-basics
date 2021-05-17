import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Component} from "@angular/core";

@Component({
    selector: 'forms-component',
    template: `
        <form [formGroup]="myFormModel">
            <input formControlName="username">
            <input formControlName="ssn">
        </form>
    `
})
export class FormsComponent {
     myFormModel: FormGroup;

    constructor(fb: FormBuilder) {
        this.myFormModel = fb.group({
            username: ['', [Validators.required, Validators.minLength(2)]],
            ssn: ['']
        })
    }
}
