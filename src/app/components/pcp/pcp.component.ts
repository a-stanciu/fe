import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartConfirmationSnackbarComponent } from '../cart-confirmation-snackbar/cart-confirmation-snackbar.component';
import { JwtUtilService } from 'src/app/services/jwt-util.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AccountDialogComponent } from '../account-dialog/account-dialog.component';
import { PcpDialogComponent } from '../pcp-dialog/pcp-dialog.component';
import { CartService } from 'src/app/services/cart.service';
import { CartInformationService } from 'src/app/services/cart-information.service';
import { CartEntryService } from 'src/app/services/cart-entry.service';

@Component({
  selector: 'app-pcp',
  templateUrl: './pcp.component.html',
  styleUrls: ['./pcp.component.scss'],
})
export class PcpComponent {
  @Input()
  product: any;

  currentCartId: number;

  variantId: number | null;

  constructor(
    private snackBar: MatSnackBar,
    private jwtUtil: JwtUtilService,
    private dialog: MatDialog,
    private cartInfo: CartInformationService,
    private cartService: CartService,
    private cartEntryService: CartEntryService
  ) {}

  ngOnInit() {
    this.product.variantList.forEach(
      (variant: { assignedValueList: any[] }) => {
        variant.assignedValueList.forEach((assignedValue) => {});
      }
    );

    this.cartService.getCurrent().subscribe((value: any) => {
      this.currentCartId = value.id;
    });
  }

  confirmAction() {
    console.log(this.currentCartId);
    console.log(this.variantId);
    if (this.jwtUtil.jwtExists()) {
      this.cartEntryService
        .create({
          cart: this.currentCartId,
          variant: this.variantId as number,
        })
        .subscribe({
          next: (value) => {
            this.snackBar.openFromComponent(CartConfirmationSnackbarComponent, {
              duration: 5000,
            });
            this.cartService.getCurrent().subscribe((value: any) => {
              console.log(value.cartEntryList.length);
              this.cartInfo.sendUpdate(Number.parseInt(value.cartEntryList.length));
            });
          },
          error: (error) => {
            alert('Produsul există deja în coș.');
          },
        });
    } else {
      this.dialog.open(AccountDialogComponent);
    }
  }

  setVariantId(variantId: number) {
    this.variantId = variantId;
  }
}
