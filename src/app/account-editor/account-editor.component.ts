import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'account-editor',
  templateUrl: 'account-editor.component.html',
  styleUrls: ['account-editor.component.css'],
  moduleId: module.id
})
export class AccountEditorComponent implements OnInit {

  user: { id: number, name: string, phones: { type: string, number: string }[] };
  departments: { id: number, name: string }[];
  _temp: { phone: { type: string, number: string } };

  constructor() {
    this.user = {
      id: 1,
      name: 'something',
      phones: [
        { type: 'mobile', number: '555-555-5555' },
        { type: 'home', number: '555-555-5556' },
      ]
    };

    this.departments = [
      { id: 1, name: 'Marketing' },
      { id: 2, name: 'Accounting' },
      { id: 3, name: 'Terrorism' },
    ];

    this.clearTempPhone();
  }

  clearTempPhone() {
    this._temp = { phone: { type: '', number: '' } };
  }

  addPhone() {
    this.user.phones.push(this._temp.phone);
    this.clearTempPhone();
  }

  ngOnInit() {
  }
}
