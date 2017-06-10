"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var PhonePipe = (function () {
    function PhonePipe() {
    }
    PhonePipe.prototype.transform = function (tel, method) {
        if (method === void 0) { method = 'format'; }
        var maxLength = 10;
        var cityCodeLength = 3;
        var numberLength = 7;
        var longDistanceCode;
        // Return if no number was passed in
        if (!tel) {
            return '';
        }
        // Strip all non-numeric characters
        var value = tel.toString().trim().replace(/\D/g, '');
        // Trim to verify the model doesn't get any larger
        if (value.length > maxLength) {
            // If the first character is a US country code
            if (value.charAt(0) === '1') {
                // Save the code
                longDistanceCode = value.charAt(0);
                // Don't strip it, allow 11 digits
                value = value.substring(1, maxLength + 1);
            }
            else {
                value = value.substring(0, maxLength);
            }
        }
        // Return if no method was passed in
        if (!method) {
            return 'A method{string} is required. e.g. \'clean\' or \'format\'';
        }
        //
        // Clean a phone number
        if (method === 'clean') {
            return value;
        }
        //
        // Format a phone number
        if (method === 'format') {
            var city = void 0;
            var number = void 0;
            switch (value.length) {
                case 1:
                case 2:
                case 3:
                    city = value;
                    break;
                default:
                    city = value.slice(0, cityCodeLength);
                    number = value.slice(cityCodeLength);
            }
            if (number) {
                if (number.length > cityCodeLength) {
                    number = number.slice(0, cityCodeLength) + '-' +
                        number.slice(cityCodeLength, numberLength);
                }
                else {
                    number = number;
                }
                return (longDistanceCode ? longDistanceCode + ' ' : '') +
                    ('(' + city + ') ' + number).trim();
            }
            else {
                return '(' + city;
            }
        }
    };
    return PhonePipe;
}());
PhonePipe = __decorate([
    core_1.Pipe({
        name: 'phone'
    })
], PhonePipe);
exports.PhonePipe = PhonePipe;
//# sourceMappingURL=phone.pipe.js.map