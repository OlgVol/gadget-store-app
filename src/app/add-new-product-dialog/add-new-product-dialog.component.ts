import { Component } from '@angular/core';
import { IProduct } from '../models/product.model';
import { ProductService } from '../shared/product-service/product.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SuccessToasterComponent } from '../success-toaster/success-toaster.component';

@Component({
  selector: 'app-add-new-product-dialog',
  templateUrl: './add-new-product-dialog.component.html',
  styleUrls: ['./add-new-product-dialog.component.scss'],
})

export class AddNewProductDialogComponent {
product: IProduct = {
  title: "",
  short_description: "",
  long_description : "",
  price: "",
  warranty_period: "",
  RAM: "",
}
sub!: Subscription;
submitted = false;
durationInSeconds = 5;

constructor(private service: ProductService,
  private _snackBar: MatSnackBar
   ) {}

onSubmit(){
  this.submitted =true
  this._snackBar.openFromComponent(SuccessToasterComponent,{
    duration:this.durationInSeconds * 1000,
    panelClass: ['green-snackbar']
  })
 this.service.addProduct(this.product)
 .subscribe(
  data => console.log('succses', data),
  error => console.log('Error!', error)
 )
}
}
