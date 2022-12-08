import { TestBed } from '@angular/core/testing';

import { CalculServicesService } from './calcul-services.service';

describe('TodoServicesService', () => {
  let service: CalculServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
