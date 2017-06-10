import { NameValidator } from './validators/name-validator.directive';
import { PhonePipe } from './pipes/phone.pipe';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    PhonePipe,
    NameValidator
  ],
  exports: [
    PhonePipe,
    NameValidator
  ],
  providers: [
    PhonePipe,
    NameValidator
  ]
})
export class SharedModule { }