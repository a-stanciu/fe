import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchComponent {
  searchValue = '';
  selectedChip = '';
  chips: string[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.categoryService.getAll().subscribe((categories) => {
      categories.map((category) => {
        this.chips.push(category.name);
      });
    });
  }

  search() {
    this.router.navigate(['/srp/' + this.searchValue]);

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        search: this.searchValue,
        filter: this.selectedChip,
      },
    });
  }

  selectChip(name: string) {
    if (this.selectedChip === name) {
      this.selectedChip = '';
    } else {
      this.selectedChip = name;
    }

    this.search();
  }
}
