import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { AddNewProductDialogComponent } from '../add-new-product-dialog/add-new-product-dialog.component';
import { IProduct } from '../models/product.model';
import { EditProductDialogComponentComponent } from '../edit-product-dialog-component/edit-product-dialog-component.component';

@Component({
  selector: 'app-menu-dialog',
  templateUrl: './menu-dialog.component.html',
  styleUrls: ['./menu-dialog.component.scss'],
})
export class MenuDialogComponent {
  @ViewChild('productForm') form?: NgForm;
  products: IProduct[]=[]

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
