import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { IProduct } from '../models/product.model';
import { Subscription } from 'rxjs';
import { ProductService } from '../shared/product-service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-product-dialog-component',
  templateUrl: './edit-product-dialog-component.component.html',
  styleUrls: ['./edit-product-dialog-component.component.scss']
})
export class EditProductDialogComponentComponent implements OnInit {
  products: IProduct[] =[]
  productForm: FormGroup;
    constructor( private _fb: FormBuilder,
      public service: ProductService,
      @Inject(MAT_DIALOG_DATA) private data: any) {
      this.productForm = this._fb.group({
        title: '',
        short_description: '',
        long_description: '',
        price: '',
        year: '',
        memory: '',
        warranty: '',
      })
    }
    ngOnInit(): void {
      this.productForm.patchValue(this.data)
    }

    onFormSubmit() {
      if(this.productForm.valid) {
        if(this.data){
        this.service
        .updateProduct(this.data.id, this.productForm.value)
        .subscribe({
          next: (val: any) => {
            alert('Product updated');
            location.reload()
          },
          error: (err: any) => {
            console.log(err)
          }
        })
      }
  }
}
}

