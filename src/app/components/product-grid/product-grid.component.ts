import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss'],
})
export class ProductGridComponent {
  allProducts: any[];
  shownProducts: any[];

  constructor(productService: ProductService, private route: ActivatedRoute) {
    productService.getAll().subscribe({
      next: (response) => {
        this.shownProducts = this.allProducts = response;
      },
      error: (error) => {
        alert(
          'The request could not be completed. Check the console for more information.'
        );
        console.error(error);
      },
    });
  }

  ngOnInit() {
    this.filterProducts();
  }

  filterProducts() {
    this.route.queryParams.subscribe((params) => {
      this.shownProducts = [];

      if (this.isEmpty(params['search']) && this.isEmpty(params['filter'])) {
        this.shownProducts = this.allProducts;
        return;
      }

      if (!this.isEmpty(params['search'])) {
        this.allProducts.forEach((product) => {
          if ((product.name as string).toLowerCase().includes((params['search'] as string).toLowerCase())) {
            this.shownProducts.push(product);
          }
        });
      }

      if (!this.isEmpty(params['filter'])) {
        this.allProducts.forEach((product) => {
          if ((product.subcategory.category.name as string).includes(params['filter'])) {
            this.shownProducts.push(product);
          }
        });
      }

      this.removeDuplicates(this.shownProducts);
    });
  }

  isEmpty(value: string | null): boolean {
    return value == '' || value == null ? true : false;
  }

  removeDuplicates(a: any[]): any[] {
    return a.filter(
      (value, index, array) =>
        !array.filter(
          (v, i) => JSON.stringify(value) == JSON.stringify(v) && i < index
        ).length
    );
  }
}
