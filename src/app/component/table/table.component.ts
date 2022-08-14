import { Component } from '@angular/core';
import { Customer } from './model/customer.interface';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'indigital-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string[] = ['name', 'lastname', 'dni', 'email', 'birthdate'];
  dni: string;
  email: string;
  customer: Customer [];

  constructor(
    public customerService: CustomerService
  ) {
    this.dni = '';
    this.email = '';
    this.customer = [];
  }

  search() {
    this.customerService.findCustomer(this.dni, this.email).subscribe( data => {
      this.customer = data;
    });
  }
}
