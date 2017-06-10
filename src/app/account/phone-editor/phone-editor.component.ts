import { Phone } from '../../domain/model/user';
import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'phone-editor',
  templateUrl: './phone-editor.component.html',
  styleUrls: ['./phone-editor.component.css']
})
export class PhoneEditorComponent {
  private _phones: Phone[];
  private newPhone = new Phone();
  @Output() phonesChange = new EventEmitter<Phone[]>();

  @Input()
  get phones(): Phone[] {
    return this._phones;
  }
  set phones(value) {
    this._phones = value;
    this.phonesChange.emit(value);
  }

  constructor() { }

  addPhone() {
    this.phones = this.phones || [];
    this.phones.push(this.newPhone);
    this.newPhone = new Phone();
  }

  deletePhone(phone: Phone) {
    this.phones.splice(this.phones.indexOf(phone), 1);
  }

  clearList() {
    this.phones = [];
  }
}