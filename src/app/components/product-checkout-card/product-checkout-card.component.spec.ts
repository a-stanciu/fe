import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCheckoutCardComponent } from './product-checkout-card.component';

describe('ProductCheckoutCardComponent', () => {
  let component: ProductCheckoutCardComponent;
  let fixture: ComponentFixture<ProductCheckoutCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCheckoutCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCheckoutCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
