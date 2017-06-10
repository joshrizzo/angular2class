"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var user_repository_service_1 = require("./../../domain/api/user-repository.service");
var core_1 = require("@angular/core");
var AccountListComponent = (function () {
    function AccountListComponent(UserRepository) {
        this.UserRepository = UserRepository;
    }
    AccountListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.UserRepository
            .search()
            .subscribe(function (x) { return _this.loadUsers(x); });
    };
    AccountListComponent.prototype.loadUsers = function (users) {
        this.accounts = users;
    };
    return AccountListComponent;
}());
AccountListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'account-list.component.html',
        styleUrls: ['account-list.component.css']
    }),
    __metadata("design:paramtypes", [user_repository_service_1.UserRepository])
], AccountListComponent);
exports.AccountListComponent = AccountListComponent;
//# sourceMappingURL=account-list.component.js.map