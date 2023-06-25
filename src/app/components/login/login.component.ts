import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AccountInformationService } from 'src/app/services/account-information.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { JwtUtilService } from 'src/app/services/jwt-util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user = {
    username: '',
    password: '',
  };
  rememberMe: boolean;
  hidePassword: boolean = true;

  constructor(
    private authenticationService: AuthenticationService,
    private accountInfoService: AccountInformationService,
    private jwtService: JwtUtilService,
    private dialogRef: MatDialogRef<LoginComponent>
  ) {}

  doLogin(): void {
    this.authenticationService.authenticate(this.user).subscribe({
      next: (result) => {
        this.authenticationService.storeToken(result, this.rememberMe);
        this.accountInfoService.sendUpdate(
          true,
          this.jwtService.getEmail(),
          this.jwtService.isAdmin() as boolean
        );
        this.dialogRef.close();
      },
      error: (error) => {
        alert(
          'Numele de utilizator sau parola nu sunt corecte.'
        );
        console.error(error);
      },
    });
  }

  buttonDisabled(): boolean {
    if (this.user.username == '' || this.user.password == '') {
      return true;
    } else {
      return false;
    }
  }
}
