import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/components/login/login.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { AccountInformationService } from 'src/app/services/account-information.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CartInformationService } from 'src/app/services/cart-information.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  secondRowVisible = false;
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  itemsInCart = 0;

  constructor(
    private dialog: MatDialog,
    private accountInfo: AccountInformationService,
    private cartInfo: CartInformationService,
    private authenticationService: AuthenticationService
  ) {
    accountInfo.getUpdate().subscribe((value) => {
      this.isLoggedIn = value.username == null ? false : true;
      this.isAdmin = value.isAdmin;
    });

    cartInfo.getUpdate().subscribe((value) => {
      this.itemsInCart = value.items;
    });
  }

  ngOnInit() {}

  convertToBoolean(input: number): boolean {
    if (input === 0) {
      return true;
    } else {
      return false;
    }
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginComponent, { restoreFocus: false });
  }

  openRegisterDialog() {
    const dialogRef = this.dialog.open(RegisterComponent, {
      restoreFocus: false,
      width: '50%',
    });
  }

  doLogout() {
    this.authenticationService.deleteToken();
    this.accountInfo.sendUpdate(false, null, false);
  }
}
