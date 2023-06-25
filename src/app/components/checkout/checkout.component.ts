import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartInformationService } from 'src/app/services/cart-information.service';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  billing: string = '';
  delivery: string = '';

  user = {
    id: 0,
    defaultBillingAddress: '',
    defaultDeliveryAddress: '',
  };

  constructor(
    private userService: UserService,
    private cartService: CartService,
    private cartInfoService: CartInformationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userService.findCurrent().subscribe((value) => {
      this.user.id = value.id;
      this.user.defaultBillingAddress = value.defaultBillingAddress as string;
      this.user.defaultDeliveryAddress = value.defaultDeliveryAddress as string;
      if (value.defaultBillingAddress == null) {
        this.user.defaultBillingAddress = '';
      }
      if (value.defaultDeliveryAddress == null) {
        this.user.defaultDeliveryAddress = '';
      }
    });
  }

  autocomplete() {
    this.billing = this.user.defaultBillingAddress;
    this.delivery = this.user.defaultDeliveryAddress;
  }

  buttonDisabled(): boolean {
    if (this.billing == '' || this.delivery == '') {
      return true;
    } else {
      return false;
    }
  }

  placeOrder(): void {
    this.cartService
      .create({ orderStatus: 'PENDING', user: this.user.id })
      .subscribe((value) => {
        this.cartInfoService.sendUpdate(0);
        alert('Vă mulțumim!');
        this.router
          .navigateByUrl('/blank', { skipLocationChange: true })
          .then(() => {
            this.router.navigate([`/`]);
          });
      });
  }
}
