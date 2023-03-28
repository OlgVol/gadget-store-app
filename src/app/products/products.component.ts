import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product-service/product.service';
import { IProduct } from './product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];
  sub!: Subscription;

  constructor(private productsService: ProductService) {}

  ngOnInit(): void {
    this.sub = this.productsService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
    });
  }
}
