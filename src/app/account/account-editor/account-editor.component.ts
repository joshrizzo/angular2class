import { UserRepository } from './../../domain/api/user-repository.service';
import { User, Phone } from './../../domain/model/domain';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: 'account-editor.component.html',
  styleUrls: ['account-editor.component.css']
})
export class AccountEditorComponent implements OnInit {

  departments: { id: number, name: string }[] = [
    { id: 1, name: 'Marketing' },
    { id: 2, name: 'Accounting' },
    { id: 3, name: 'Terrorism' },
  ];
  _temp: { phone: Phone } = { phone: new Phone() };
  testUser: User = new User();
  user: User = this.testUser;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userRepository: UserRepository) {
  }

  addPhone() {
    this.user.phones.push(this._temp.phone);
    this._temp.phone = new Phone();
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
      this.userRepository
        .getById(+params.id)
        .subscribe(user => this.loadUser(user));
    } else {
      this.user = new User();
    }
  }

  loadUser(user: User) {
    this.user = user;
  }
}
