import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss'],
})
export class UserSettingsComponent {
  user = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    defaultDeliveryAddress: '',
    defaultBillingAddress: '',
  };

  constructor(
    private userService: UserService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.userService.findCurrent().subscribe((user) => {
      this.user = user;
    });
  }

  updateInfo() {
    this.userService.update(this.user).subscribe({
      next: (result) => {
        alert('Succes');
      },
      error: (error) => {
        alert('A avut loc o eroare');
        console.error(error);
      },
    });
  }
}
