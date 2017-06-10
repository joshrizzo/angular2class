import { PhonePipe } from './pipes/phone.pipe';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    PhonePipe
  ],
  exports: [
    PhonePipe
  ]
})
export class SharedModule { }