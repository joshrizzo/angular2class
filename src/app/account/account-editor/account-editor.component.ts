import { PhoneEditorComponent } from './../phone-editor/phone-editor.component';
import { UserRepository } from './../../domain/api/user-repository.service';
import { User } from './../../domain/model/user';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/first';

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
  testUser: User = new User();
  user: User = this.testUser;

  @ViewChild('phoneEditor')
  phoneEditor: PhoneEditorComponent;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userRepository: UserRepository) {
  }

  save() {
    this.userRepository
      .save(this.user)
      .subscribe(result => this.handleResult(result));
  }

  delete() {
    this.userRepository
      .delete(this.user.id)
      .subscribe(result => this.handleResult(result));
  }

  cancel() {
    this.router.navigateByUrl('accounts')
  }

  handleResult(result: any) {
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

  clearPhones() {
    this.phoneEditor.clearList();
  }
}
