import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserRepository {
    url = 'api/users';

    constructor(private http: Http) { }

    search(search?: string): Observable<User[]> {
        return this.http
            .get(this.url, { search })
            .map(response => this.extractData(response))
            .catch(error => this.handleError(error));
    }

    getById(id: number): Observable<User> {
        return this.http
            .get(`${this.url}/${id}`)
            .map(response => this.extractData(response))
            .catch(error => this.handleError(error));
    }

    save(user: User): Observable<User> {
        if (user.id) {
            return this.http
                .put(`${this.url}/${user.id}`, user)
                .map(response => this.extractData(response))
                .catch(error => this.handleError(error));
        }
        return this.http
            .post(this.url, user)
            .map(response => this.extractData(response))
            .catch(error => this.handleError(error));
    }

    delete(id: number): Observable<any> {
        return this.http
            .delete(`${this.url}/${id}`)
            .catch(error => this.handleError(error));
    }

    private extractData(response: Response) {
        let jsonData = response.json();
        return jsonData ? jsonData.data : undefined;
    }

    private handleError(error: any) {
        return Observable.throw(error.message);
    }
}
