import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
  };
  hidePassword: boolean = true;

  constructor(
    private dialogRef: MatDialogRef<RegisterComponent>,
    private registrationService: RegistrationService,
    private authenticationService: AuthenticationService
  ) {}

  doRegister(): void {
    this.registrationService.register(this.user).subscribe({
      next: (result) => {
        alert('Contul a fost creat. Vă rugăm să vă autentificați.');
        this.dialogRef.close();
      },
      error: (error) => {
        alert('Numele de utilizator sau parola nu sunt corecte.');
        console.error(error);
      },
    });
  }

  buttonDisabled(): boolean {
    if (this.fieldsValid()) {
      return false;
    } else {
      return true;
    }
  }

  fieldsValid(): boolean {
    if (
      this.user.firstName == '' ||
      this.user.lastName == '' ||
      this.user.email == '' ||
      this.user.phoneNumber == '' ||
      this.user.password == ''
    ) {
      return false;
    } else {
      return true;
    }
  }
}
