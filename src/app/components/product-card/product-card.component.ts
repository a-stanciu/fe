import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PcpDialogComponent } from '../pcp-dialog/pcp-dialog.component';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input()
  product: any;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openCustomizationDialog() {
    const dialogRef = this.dialog.open(PcpDialogComponent, {
      restoreFocus: false,
    });
  }
}
