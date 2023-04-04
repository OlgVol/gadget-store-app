import { Component } from '@angular/core';
import { IProduct } from '../models/product.model';
import { ProductService } from '../shared/product-service/product.service';
import { Subscription } from 'rxjs';
import { SuccessfulSubmissionComponent } from '../successful-submission/successful-submission.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
//import { ToastrService } from 'ngx-toastr';

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

constructor(private service: ProductService,
  private dialog: MatDialog,
  //private succesT: SuccessfulSubmissionComponent,
  private router: Router
  //private toastr: ToastrService
   ) {}

onSubmit(){
  this.submitted =true
  this.dialog.open(SuccessfulSubmissionComponent)
 this.service.addProduct(this.product)
 .subscribe(
  data => console.log('succses', data),
  error => console.log('Error!', error)
 )
}
}
