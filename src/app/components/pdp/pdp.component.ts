import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ShirtTryOnComponent } from '../shirt-try-on/shirt-try-on.component';

@Component({
  selector: 'app-pdp',
  templateUrl: './pdp.component.html',
  styleUrls: ['./pdp.component.scss'],
})
export class PdpComponent {
  product: any = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.productService.get(id as number).subscribe((product) => {
      this.product = product;
    });
  }

  isShirt(): boolean {
    if (this.product.subcategory.name == "tricouri") {
      return true;
    } else {
      return false;
    }
  }
}
