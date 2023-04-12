import { Component } from '@angular/core';
import { IProduct } from '../models/product.model';
import { Subscription } from 'rxjs';
import { ProductService } from '../shared/product-service/product.service';

@Component({
  selector: 'app-edit-product-dialog-component',
  templateUrl: './edit-product-dialog-component.component.html',
  styleUrls: ['./edit-product-dialog-component.component.scss']
})
export class EditProductDialogComponentComponent {
    product: IProduct = {
      title: '',
      short_description: '',
      long_description: '',
      price: '',
      warranty_period: '',
      RAM: '',
      imgUrl : "./assets/images/tablet.png"
    };
    sub!: Subscription;
    submitted = false;
    durationInSeconds = 5;

    constructor(
      private service: ProductService,
    ) {}

    onSubmit() {
      this.submitted = true;
      this.service.addProduct(this.product).subscribe(
        (data) => console.log('succses', data),
        (error) => console.log('Error!', error)
      );
    }
  }
