import { Component } from '@angular/core';
import { IProduct } from '../models/product.model';
import { ProductService } from '../shared/product-service/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-new-product-dialog',
  templateUrl: './add-new-product-dialog.component.html',
  styleUrls: ['./add-new-product-dialog.component.scss'],
})

export class AddNewProductDialogComponent {
product: IProduct = {
  title: "player",
  short_description: "bla-bla",
  long_description : "reale good",
  price: "1000",
  warranty_period: "25",
  RAM: "5",
}
sub!: Subscription;

constructor(private service: ProductService) {}

onSubmit(){
 this.service.addProduct(this.product)
 .subscribe(
  data => console.log("success", data),
  error => console.log('Error!', error)
 )
}
}
