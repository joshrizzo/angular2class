"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var account_list_component_1 = require("./account-list/account-list.component");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var account_editor_component_1 = require("./account-editor/account-editor.component");
var routes = [
    { path: 'accounts', component: account_list_component_1.AccountListComponent },
    { path: 'accounts/new', component: account_editor_component_1.AccountEditorComponent },
    { path: 'accounts/:id', component: account_editor_component_1.AccountEditorComponent }
];
var AccountModule = (function () {
    function AccountModule() {
    }
    return AccountModule;
}());
AccountModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule.forChild(routes)
        ],
        declarations: [
            account_editor_component_1.AccountEditorComponent,
            account_list_component_1.AccountListComponent
        ],
    })
], AccountModule);
exports.AccountModule = AccountModule;
//# sourceMappingURL=account.module.js.map