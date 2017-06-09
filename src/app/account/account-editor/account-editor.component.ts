import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: 'account-editor.component.html',
  styleUrls: ['account-editor.component.css'],
  moduleId: module.id
})
export class AccountEditorComponent implements OnInit {

  user: { id: number, name: string, phones: { type: string, number: string }[] };
  departments: { id: number, name: string }[];
  _temp: { phone: { type: string, number: string } };
  testUser = {
    id: 1,
    name: 'something',
    phones: [
      { type: 'mobile', number: '555-555-5555' },
      { type: 'home', number: '555-555-5556' },
    ]
  }

  constructor(private route: ActivatedRoute, private router: Router) {
    this.user = this.testUser;

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

  save() {
    // TODO: Save.
    this.router.navigateByUrl('accounts');
  }

  ngOnInit() {
    this.route.params.subscribe(x => this.loadRoute(x));
  }

  loadRoute(params: any) {
    if (params.id) {
      // TODO: Load from repo.
      this.user = this.testUser;
    } else {
      this.user = { id: null, name: null, phones: [] };
    }
  }
}
