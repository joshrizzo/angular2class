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
var user_1 = require("../../domain/model/user");
var core_1 = require("@angular/core");
var PhoneEditorComponent = (function () {
    function PhoneEditorComponent() {
        this.newPhone = new user_1.Phone();
        this.phonesChange = new core_1.EventEmitter();
    }
    Object.defineProperty(PhoneEditorComponent.prototype, "phones", {
        get: function () {
            return this._phones;
        },
        set: function (value) {
            this._phones = value;
            this.phonesChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    PhoneEditorComponent.prototype.addPhone = function () {
        this.phones = this.phones || [];
        this.phones.push(this.newPhone);
        this.newPhone = new user_1.Phone();
    };
    PhoneEditorComponent.prototype.deletePhone = function (phone) {
        this.phones.splice(this.phones.indexOf(phone), 1);
    };
    PhoneEditorComponent.prototype.clearList = function () {
        this.phones = [];
    };
    return PhoneEditorComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PhoneEditorComponent.prototype, "phonesChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Object])
], PhoneEditorComponent.prototype, "phones", null);
PhoneEditorComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'phone-editor',
        templateUrl: './phone-editor.component.html',
        styleUrls: ['./phone-editor.component.css']
    }),
    __metadata("design:paramtypes", [])
], PhoneEditorComponent);
exports.PhoneEditorComponent = PhoneEditorComponent;
//# sourceMappingURL=phone-editor.component.js.map