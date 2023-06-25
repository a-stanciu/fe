import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-srp',
  templateUrl: './srp.component.html',
  styleUrls: ['./srp.component.scss'],
})
export class SrpComponent {
  searchGreet = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.setSearchGreet();
  }

  setSearchGreet() {
    this.route.queryParams.subscribe((params) => {
      this.searchGreet = 'Căutați';

      if (this.isEmpty(params['search']) && this.isEmpty(params['filter'])) {
        this.searchGreet += ' toate hainele';
      } else {
        if (this.isEmpty(params['filter'])) {
          this.searchGreet += ' haine';
        } else {
          this.searchGreet += ` ${params['filter']}`;
        }

        if (!this.isEmpty(params['search'])) {
          this.searchGreet += ` "${params['search']}"`;
        }
      }
    });
  }

  isEmpty(value: String | null): boolean {
    return value == '' || value == null ? true : false;
  }
}
