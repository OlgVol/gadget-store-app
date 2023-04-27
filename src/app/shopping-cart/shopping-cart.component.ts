import { Component } from '@angular/core';
import { IProduct } from '../models/product.model';
import { ProductService } from '../shared/product-service/product.service';
import { CartService } from '../shared/cart-service/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
items = this.cartService.getItems();

title = "Shopping Cart"

constructor(
  public cartService: CartService
){}
}
