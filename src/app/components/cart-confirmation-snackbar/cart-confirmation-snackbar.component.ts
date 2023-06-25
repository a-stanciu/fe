import { Component, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart-confirmation-snackbar',
  templateUrl: './cart-confirmation-snackbar.component.html',
  styleUrls: ['./cart-confirmation-snackbar.component.scss'],
})
export class CartConfirmationSnackbarComponent {
  snackBarRef = inject(MatSnackBarRef);
}
