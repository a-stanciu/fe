import { Component } from '@angular/core';
import { AccountInformationService } from './services/account-information.service';
import { JwtUtilService } from './services/jwt-util.service';
import { CartInformationService } from './services/cart-information.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fe';

  constructor(
    private accountInfo: AccountInformationService,
    private cartInfo: CartInformationService,
    private cartService: CartService,
    private jwtService: JwtUtilService
  ) {}

  ngOnInit() {
    this.accountInfo.sendUpdate(
      this.jwtService.jwtExists(),
      this.jwtService.getEmail(),
      this.jwtService.isAdmin() as boolean
    );

    this.cartService.getCurrent().subscribe((value: any) => {
      console.log(value.cartEntryList.length);
      this.cartInfo.sendUpdate(Number.parseInt(value.cartEntryList.length));
    });
  }
}
