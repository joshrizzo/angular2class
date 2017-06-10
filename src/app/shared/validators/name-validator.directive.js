"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var NameValidator = NameValidator_1 = (function () {
    function NameValidator() {
    }
    NameValidator.prototype.validate = function (control) {
        var isValid = new RegExp(/\w+ \w+/).test(control.value);
        return isValid ? null : { 'fullName': true };
    };
    return NameValidator;
}());
NameValidator = NameValidator_1 = __decorate([
    core_1.Directive({
        selector: '[fullName][ngModel]',
        providers: [
            { provide: forms_1.NG_VALIDATORS, useExisting: NameValidator_1, multi: true }
        ]
    })
], NameValidator);
exports.NameValidator = NameValidator;
var NameValidator_1;
//# sourceMappingURL=name-validator.directive.js.map