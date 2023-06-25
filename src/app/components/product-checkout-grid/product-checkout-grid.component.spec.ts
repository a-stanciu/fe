import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCheckoutGridComponent } from './product-checkout-grid.component';

describe('ProductCheckoutGridComponent', () => {
  let component: ProductCheckoutGridComponent;
  let fixture: ComponentFixture<ProductCheckoutGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCheckoutGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCheckoutGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
