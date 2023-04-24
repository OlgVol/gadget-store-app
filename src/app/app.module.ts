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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuccessfulSubmissionComponent } from './successful-submission/successful-submission.component';
import { SuccessToasterComponent } from './success-toaster/success-toaster.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeroSectionComponent,
    ProductsComponent,
    FeatureSectionComponent,
    AddNewProductDialogComponent,
    ProductDetailsComponent,
    SuccessfulSubmissionComponent,
    SuccessToasterComponent,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
