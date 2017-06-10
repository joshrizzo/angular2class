import { User } from './../model/domain';
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

    private extractData(response: Response) {
        return response.json().data;
    }

    private handleError(error: any) {
        return error.message;
    }
}
