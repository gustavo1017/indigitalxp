import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RegistroService {
    constructor(
        public http: HttpClient,
    ) { }

    createCustomer(request: any) {
        const url = `http://localhost:8080/api/customer/create`;
        return this.http.post<any>(url, request);
    }
}
