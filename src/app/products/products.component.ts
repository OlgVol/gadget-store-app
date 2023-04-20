import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../shared/product-service/product.service';
import { IProduct } from '../models/product.model';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddNewProductDialogComponent } from '../add-new-product-dialog/add-new-product-dialog.component';
import { registerLocaleData } from '@angular/common';
import localFr from '@angular/common/locales/fr';
import { Router } from '@angular/router';
import { MenuDialogComponent } from '../menu-dialog/menu-dialog.component';
import { EditProductDialogComponentComponent } from '../edit-product-dialog-component/edit-product-dialog-component.component';

registerLocaleData(localFr, 'fr');

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductService],
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: IProduct[] = [];
  sub!: Subscription;
  // @Input() productForm: AddNewProductDialogComponent;
  // public productForm!: NgForm | AddNewProductDialogComponent;

  constructor(
    private productsService: ProductService,
    private dialog: MatDialog,
    public router: Router
  ) {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(AddNewProductDialogComponent, dialogConfig);
  }
  goToDetails() {
    this.router.navigateByUrl('/products/:id');
  }
  goToMenuDialog() {
    const menuDialogConfig = new MatDialogConfig();
    menuDialogConfig.disableClose = true;
    menuDialogConfig.autoFocus = true;
    this.dialog.open(MenuDialogComponent, menuDialogConfig);
  }
  addToCard() {
    console.log('added to cart');
  }
  addNewProduct() {
    console.log('added new product');
  }
  ngOnInit(): void {
    this.sub = this.productsService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  //   onEdit(id: number| undefined): void {
  // const currentProduct = this.products.find((p) => {return p.id === id})
  // console.log(currentProduct)
  //  const dialogConfig = new MatDialogConfig();
  //     dialogConfig.disableClose = true;
  //     dialogConfig.autoFocus = true;
  //     this.dialog.open(EditProductDialogComponentComponent, dialogConfig);
  // });
  onEdit() {
    this.dialog.open(EditProductDialogComponentComponent);
  }
  OnDeleteProduct(id: number) {
    this.productsService.deleteProduct(id).subscribe({
      next: (res) => {
        alert('product deleted');
        location.reload();
      },
      error: console.log,
    });
  }
}
