import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {
    constructor(
        public http: HttpClient,
    ) { }

    findCustomer(dni: string, email: string) {
      const customerDni = dni.length === 0 ? ' ' : dni;
      const customerEmail = email.length === 0 ? 'a' : email;
        const url = `http://localhost:8080/api/customer/find/${customerDni}/email/${customerEmail}`;
        return this.http.get<any>(url);
    }

    indicators() {
        const url = `http://localhost:8080/api/customer/indicators`;
        return this.http.get<any>(url);
    }
}
