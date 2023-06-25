import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartConfirmationSnackbarComponent } from './cart-confirmation-snackbar.component';

describe('CartConfirmationSnackbarComponent', () => {
  let component: CartConfirmationSnackbarComponent;
  let fixture: ComponentFixture<CartConfirmationSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartConfirmationSnackbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartConfirmationSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
