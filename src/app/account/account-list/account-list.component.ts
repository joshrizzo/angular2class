import { Router } from '@angular/router';
import { UserRepository } from './../../domain/api/user-repository.service';
import { User } from './../../domain/model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: 'account-list.component.html',
  styleUrls: ['account-list.component.css']
})
export class AccountListComponent implements OnInit {
  accounts: User[];

  constructor(
    private userRepository: UserRepository,
    private router: Router) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userRepository
      .search()
      .subscribe(users => this.accounts = users);
  }

  delete(id: number) {
    this.userRepository
      .delete(id)
      .subscribe(result => this.handleResult(result));
  }

  handleResult(result: any) {
    console.log('Result: ' + result);
    this.loadUsers();
  }
}
