import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Observable, Subject } from 'rxjs';
import { CustomerService } from 'src/app/service/customer.service';
import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let customerService: CustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TableComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        TableComponent,
        CustomerService
      ]
    });
    component = TestBed.inject(TableComponent);
    customerService = TestBed.inject(CustomerService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('search', () => {
    const spy1 = spyOn(customerService, 'findCustomer').and.callFake( (dni, email) => {
      let clientes$ = new Subject<any>();
      return clientes$;
    })
    component.search();
    expect(spy1).toHaveBeenCalled();
  });


});
