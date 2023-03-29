import { Component, OnInit, OnDestroy } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localFr from '@angular/common/locales/fr';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NewProductDialogComponent } from '../new-product-dialog/new-product-dialog.component';
import { ProductService } from '../shared/product-service/product.service';
import { IProduct } from '../models/product.model';
import { Subscription } from 'rxjs';

registerLocaleData(localFr, 'fr');

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  providers: [ProductService ]
})
export class ProductCardComponent implements OnInit, OnDestroy{
  products: IProduct[] = [];
  sub!: Subscription;

  constructor(private dialog: MatDialog,
    private productsService: ProductService
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
