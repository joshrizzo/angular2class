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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var AccountEditorComponent = (function () {
    function AccountEditorComponent(route, router) {
        this.route = route;
        this.router = router;
        this.testUser = {
            id: 1,
            name: 'something',
            phones: [
                { type: 'mobile', number: '555-555-5555' },
                { type: 'home', number: '555-555-5556' },
            ]
        };
        this.user = this.testUser;
        this.departments = [
            { id: 1, name: 'Marketing' },
            { id: 2, name: 'Accounting' },
            { id: 3, name: 'Terrorism' },
        ];
        this.clearTempPhone();
    }
    AccountEditorComponent.prototype.clearTempPhone = function () {
        this._temp = { phone: { type: '', number: '' } };
    };
    AccountEditorComponent.prototype.addPhone = function () {
        this.user.phones.push(this._temp.phone);
        this.clearTempPhone();
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
        if (params.id) {
            // TODO: Load from repo.
            this.user = this.testUser;
        }
        else {
            this.user = { id: null, name: null, phones: [] };
        }
    };
    return AccountEditorComponent;
}());
AccountEditorComponent = __decorate([
    core_1.Component({
        templateUrl: 'account-editor.component.html',
        styleUrls: ['account-editor.component.css'],
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
], AccountEditorComponent);
exports.AccountEditorComponent = AccountEditorComponent;
//# sourceMappingURL=account-editor.component.js.map