import { Component, Inject, OnInit } from '@angular/core';
import { IProduct } from '../models/product.model';
import { ProductService } from '../shared/product-service/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SuccessToasterComponent } from '../success-toaster/success-toaster.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-new-product-dialog',
  templateUrl: './add-new-product-dialog.component.html',
  styleUrls: ['./add-new-product-dialog.component.scss'],
})
export class AddNewProductDialogComponent {
  // products: IProduct[] =[]
  productForm: FormGroup;
  durationInSeconds = 5;
  constructor(
    private _fb: FormBuilder,
    public service: ProductService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: IProduct
  ) {
    this.productForm = this._fb.group({
      title: '',
      short_description: '',
      long_description: '',
      price: '',
      year: '',
      memory: '',
      warranty: '',
      imgUrl: './assets/images/tablet.png',
    });
  }
  ngOnInit(): void {
    this.productForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.productForm.valid) {
      if (this.data) {
        this.service
          .updateProduct(this.data.id, this.productForm.value)
          .subscribe({
            next: (val: any) => {
              this._snackBar.openFromComponent(SuccessToasterComponent, {
                duration: this.durationInSeconds * 1000,
                panelClass: ['green-snackbar'],
              });
            },
            error: (err: any) => {
              console.log(err);
            },
          });
      }
    } else {
      this.service.addProduct(this.productForm.value).subscribe({
        next: (val: any) => {
          this._snackBar.openFromComponent(SuccessToasterComponent, {
            duration: this.durationInSeconds * 1000,
            panelClass: ['green-snackbar'],
          });
        },
        error: (err: any) => {
          console.error(err);
        },
      });
    }
  }
}
