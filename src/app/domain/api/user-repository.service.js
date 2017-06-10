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
var http_1 = require("@angular/http");
var observable_1 = require("rxjs/observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var UserRepository = (function () {
    function UserRepository(http) {
        this.http = http;
        this.url = 'api/users';
    }
    UserRepository.prototype.search = function (search) {
        var _this = this;
        return this.http
            .get(this.url, { search: search })
            .map(function (response) { return _this.extractData(response); })
            .catch(function (error) { return _this.handleError(error); });
    };
    UserRepository.prototype.getById = function (id) {
        var _this = this;
        return this.http
            .get(this.url + "/" + id)
            .map(function (response) { return _this.extractData(response); })
            .catch(function (error) { return _this.handleError(error); });
    };
    UserRepository.prototype.save = function (user) {
        var _this = this;
        if (user.id) {
            console.log('Saving User ID: ' + user.id);
            return this.http
                .put(this.url + "/" + user.id, user)
                .map(function (response) { return _this.extractData(response); })
                .catch(function (error) { return _this.handleError(error); });
        }
        console.log('Creating new user.');
        return this.http
            .post(this.url, user)
            .map(function (response) { return _this.extractData(response); })
            .catch(function (error) { return _this.handleError(error); });
    };
    UserRepository.prototype.delete = function (id) {
        var _this = this;
        console.log('Deleting User ID: ' + id);
        return this.http
            .delete(this.url + "/" + id)
            .catch(function (error) { return _this.handleError(error); });
    };
    UserRepository.prototype.extractData = function (response) {
        var jsonData = response.json();
        return jsonData ? jsonData.data : undefined;
    };
    UserRepository.prototype.handleError = function (error) {
        return observable_1.Observable.throw(error.message);
    };
    return UserRepository;
}());
UserRepository = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user-repository.service.js.map