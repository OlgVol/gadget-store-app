import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditProductDialogComponentComponent } from '../edit-product-dialog-component/edit-product-dialog-component.component';

@Component({
  selector: 'app-menu-dialog',
  templateUrl: './menu-dialog.component.html',
  styleUrls: ['./menu-dialog.component.scss'],
})
export class MenuDialogComponent {
  constructor(private dialog: MatDialog) {}

  onDelete() {
    console.log('delete');
  }
  onEdit() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(EditProductDialogComponentComponent, dialogConfig);
  }
}
