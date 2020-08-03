import { Injectable } from '@angular/core';
import { HttpService } from '../../../core/http/http.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class MapService {

    constructor(private http: HttpService) {}

    getAddress(): Observable<any> {
        return this.http.get<any>();
    }
}
