import { Component } from '@angular/core';
import { CartInformationService } from 'src/app/services/cart-information.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-checkout-grid',
  templateUrl: './product-checkout-grid.component.html',
  styleUrls: ['./product-checkout-grid.component.scss']
})
export class ProductCheckoutGridComponent {
  cartProducts: any[] = [];
  cartEntries: any[] = [];

  constructor(
    private cartService: CartService,
    private cartInfo: CartInformationService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.cartService.getCurrent().subscribe((value: any) => {
      this.cartEntries = value.cartEntryList;

      this.cartEntries.forEach((entry) => {
        this.productService.getByVariant(entry.variant.id).subscribe((value: any) => {
          this.cartProducts.push(value);
        }) 
      })

      this.setCartProducts();
    });
  }

  setCartProducts(): void {
    
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }
}
