import { TestBed } from '@angular/core/testing';

import { CartInformationService } from './cart-information.service';

describe('CartInformationService', () => {
  let service: CartInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
