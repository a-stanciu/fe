import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartEntryService } from 'src/app/services/cart-entry.service';
import { CartInformationService } from 'src/app/services/cart-information.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-checkout-card',
  templateUrl: './product-checkout-card.component.html',
  styleUrls: ['./product-checkout-card.component.scss'],
})
export class ProductCheckoutCardComponent {
  @Input()
  cartProduct: any;

  @Input()
  cartEntry: any;

  constructor(
    private cartEntryService: CartEntryService,
    private cartService: CartService,
    private cartInfo: CartInformationService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log(this.cartEntry);
  }

  deleteItem(id: number) {
    this.cartEntryService.delete(id).subscribe((value) => {
      this.cartService.getCurrent().subscribe((value: any) => {
        console.log(value.cartEntryList.length);
        this.cartInfo.sendUpdate(Number.parseInt(value.cartEntryList.length));

        this.router
          .navigateByUrl('/blank', { skipLocationChange: true })
          .then(() => {
            this.router.navigate([`/cart`]);
          });
      });
    });
  }
}
