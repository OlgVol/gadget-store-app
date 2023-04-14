import { Component, ViewChild } from '@angular/core';
import { IProduct } from '../models/product.model';
import { Subscription } from 'rxjs';
import { ProductService } from '../shared/product-service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-product-dialog-component',
  templateUrl: './edit-product-dialog-component.component.html',
  styleUrls: ['./edit-product-dialog-component.component.scss']
})
export class EditProductDialogComponentComponent {
  @ViewChild('productForm') form!: NgForm;
  //products: IProduct[] = [];
  //product: IProduct | undefined;
  product: IProduct = {
    title: '',
   short_description: '',
    long_description: '',
    price: '',
    warranty_period: '',
    RAM: '',
    imgUrl: "./assets/images/tablet.png",
  };
  //products: IProduct[]= []
    sub!: Subscription;
    submitted = false;
    durationInSeconds = 5;

    constructor(
      public service: ProductService,
      public actRoute: ActivatedRoute,
      public router: Router,
      private route: ActivatedRoute,
      private productsService: ProductService

    ) {}
//ngOnInit(): void {
//   this.service.getProductById(this.id).subscribe((data: {}) => {
//     this.productData = data
//   })
// }

onUpdate() {
this.form.setValue({
  title: this.product?.title,
  short_description: this.product?.short_description,
  long_description: this.product?.long_description,
  price: this.product?.price,
  warranty_period: this.product?.warranty_period,
  RAM: this.product?.RAM,
  imgUrl: this.product?.imgUrl
})
console.log(this.form)
}

// // })
// }
// }
//.subscribe({
//     next: () => this.onSaveComplete(`The updated ${this.product} was saved`),

//     error: err => err
//   });
// }

// onSaveComplete(message?: string): void {
// if (message) {
// console.log(message);
// location.reload()
// }
// location.reload()
// this.router.navigate(['/products']);
// }
// }
    }


