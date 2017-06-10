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
var domain_1 = require("./../../domain/model/domain");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var AccountEditorComponent = (function () {
    function AccountEditorComponent(route, router, userRepository) {
        this.route = route;
        this.router = router;
        this.userRepository = userRepository;
        this.departments = [
            { id: 1, name: 'Marketing' },
            { id: 2, name: 'Accounting' },
            { id: 3, name: 'Terrorism' },
        ];
        this._temp = { phone: new domain_1.Phone() };
        this.testUser = new domain_1.User();
        this.user = this.testUser;
    }
    AccountEditorComponent.prototype.addPhone = function () {
        this.user.phones.push(this._temp.phone);
        this._temp.phone = new domain_1.Phone();
    };
    AccountEditorComponent.prototype.save = function () {
        // TODO: Save.
        this.router.navigateByUrl('accounts');
    };
    AccountEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (x) { return _this.loadRoute(x); });
    };
    AccountEditorComponent.prototype.loadRoute = function (params) {
        var _this = this;
        if (params.id) {
            this.userRepository
                .getById(+params.id)
                .subscribe(function (user) { return _this.loadUser(user); });
        }
        else {
            this.user = new domain_1.User();
        }
    };
    AccountEditorComponent.prototype.loadUser = function (user) {
        this.user = user;
    };
    return AccountEditorComponent;
}());
AccountEditorComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'account-editor.component.html',
        styleUrls: ['account-editor.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        user_repository_service_1.UserRepository])
], AccountEditorComponent);
exports.AccountEditorComponent = AccountEditorComponent;
//# sourceMappingURL=account-editor.component.js.map