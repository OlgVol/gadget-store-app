import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSlideToggleModule,

  ],
  exports: [
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
<<<<<<< HEAD
    MatGridListModule
=======
    CommonModule
>>>>>>> fd9ca8705de595adcada35ecc7ec9f062cdb3715
  ]
})
export class MaterialModule { }
