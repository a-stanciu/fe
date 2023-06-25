import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sf',
  templateUrl: './sf.component.html',
  styleUrls: ['./sf.component.scss'],
})
export class SfComponent {
  products: any;

  constructor(productService: ProductService) {
    productService.getAll().subscribe((value) => {
      this.products = value;
    });
  }

  getLimitedProducts(): any[] {
    return this.products.slice(0, 4);
  }
}
