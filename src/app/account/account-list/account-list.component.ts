import { UserRepository } from './../../domain/api/user-repository.service';
import { User } from './../../domain/model/domain';
import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  templateUrl: 'account-list.component.html',
  styleUrls: ['account-list.component.css']
})
export class AccountListComponent implements OnInit {
  accounts: User[];

  constructor(private UserRepository: UserRepository) { }

  ngOnInit() {
    this.UserRepository
      .search()
      .subscribe(x => this.loadUsers(x));
  }

  loadUsers(users: User[]) {
    this.accounts = users;
  }
}