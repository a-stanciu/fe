import { TestBed } from '@angular/core/testing';

import { CartEntryService } from './cart-entry.service';

describe('CartEntryService', () => {
  let service: CartEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
