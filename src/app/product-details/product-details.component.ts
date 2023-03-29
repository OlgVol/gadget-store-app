import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product-service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct| undefined;
  errorMessage = ''
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getProductById(id);
    }
  }
  getProductById(id: number):void {
    this.productsService.getProductById(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    })
  }
}
