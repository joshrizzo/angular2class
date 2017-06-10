import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
    selector: '[fullName][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: NameValidator, multi: true }
    ]
})
export class NameValidator implements Validator {
    validate(control: AbstractControl): ValidationErrors {
        let isValid = new RegExp(/\w+ \w+/).test(control.value);
        return isValid ? null : { 'fullName': true };
    }
}
