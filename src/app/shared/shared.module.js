"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var name_validator_directive_1 = require("./validators/name-validator.directive");
var phone_pipe_1 = require("./pipes/phone.pipe");
var core_1 = require("@angular/core");
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        declarations: [
            phone_pipe_1.PhonePipe,
            name_validator_directive_1.NameValidator
        ],
        exports: [
            phone_pipe_1.PhonePipe,
            name_validator_directive_1.NameValidator
        ],
        providers: [
            phone_pipe_1.PhonePipe,
            name_validator_directive_1.NameValidator
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map