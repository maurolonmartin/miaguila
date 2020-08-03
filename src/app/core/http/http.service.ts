import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor( private http: HttpClient ) {}

    public get<t>() {
        return this.http.get<t>(environment.apiJSON);
    }

    getJson(url: string) {
        return this.http.get(url);
    }
}
