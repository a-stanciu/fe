import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartProducts: any[] = [];
  cartEntries: any[] = [];
  price: number = 0;

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.cartService.getCurrent().subscribe((value: any) => {
      this.cartEntries = value.cartEntryList;

      this.cartEntries.forEach((entry) => {
        this.productService
          .getByVariant(entry.variant.id)
          .subscribe((value: any) => {
            this.cartProducts.push(value);
            this.price += value.price;
          });
      });
    });
  }
}
