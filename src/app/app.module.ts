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
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';


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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
