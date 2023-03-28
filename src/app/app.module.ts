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
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeroSectionComponent,
    ProductsComponent,
    FeatureSectionComponent,
    ProductCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
