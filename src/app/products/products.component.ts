import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../shared/product-service/product.service';
import { IProduct } from '../models/product.model';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NewProductDialogComponent } from '../new-product-dialog/new-product-dialog.component';
import { registerLocaleData } from '@angular/common';
import localFr from '@angular/common/locales/fr';

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

  constructor(
    private productsService: ProductService,
    private dialog: MatDialog
  ) {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(NewProductDialogComponent, dialogConfig);
  }
  goToDetails() {
    console.log('details');
  }
  goToMenu() {
    console.log('menu');
  }
  addToCard() {
    console.log('added to card');
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
}
