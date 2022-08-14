import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CustomerService } from './customer.service';

describe('CustomerService', () => {
  let service: CustomerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(CustomerService);
  });

  it('Se debe crear el servicio', () => {
    expect(service).toBeTruthy();
  });

  it('findCustomer', () => {
    service.findCustomer('132345234', 'gequispe@gmail.com').subscribe();
    const req = httpMock.expectOne((d) => d.method === 'GET');
    req.flush([]);
    expect(req.request.method).toBe('GET');
  });

  it('indicators', () => {
    service.indicators().subscribe();
    const req = httpMock.expectOne((d) => d.method === 'GET');
    req.flush([]);
    expect(req.request.method).toBe('GET');
  });
});
