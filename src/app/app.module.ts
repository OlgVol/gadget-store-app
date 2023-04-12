import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { HomePageComponent } from './home-page/home-page.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from './shared/shared-module';
import { FeatureSectionComponent } from './feature-section/feature-section.component';
import { HttpClientModule } from '@angular/common/http';
import { AddNewProductDialogComponent } from './add-new-product-dialog/add-new-product-dialog.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MenuDialogComponent } from './menu-dialog/menu-dialog.component';
import { FormsModule } from '@angular/forms';
import { SuccessfulSubmissionComponent } from './successful-submission/successful-submission.component';
import { SuccessToasterComponent } from './success-toaster/success-toaster.component';
import { EditProductDialogComponentComponent } from './edit-product-dialog-component/edit-product-dialog-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeroSectionComponent,
    ProductsComponent,
    FeatureSectionComponent,
    AddNewProductDialogComponent,
    ProductDetailsComponent,
    MenuDialogComponent,
    SuccessfulSubmissionComponent,
    SuccessToasterComponent,
    EditProductDialogComponentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
