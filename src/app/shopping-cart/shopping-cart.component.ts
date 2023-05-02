import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product.model';
import { CartService } from '../shared/cart-service/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  cartItems: IProduct[] = [];
  //items = this.cartService.getItems();
  totalPrice = 0;
  // quantity = 1

  // productQuantity = 1

  title = 'Shopping Cart';

  constructor(public cartService: CartService) {}

  ngOnInit() {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
      this.calculateTotalPrice();
    });
  }

  decreaseQuantity(id: number) {
    const item = this.cartItems.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      this.cartService.updateQuantity(id, item.quantity - 1);
    } else if (item && item.quantity < 1) {
      this.cartService.removeFromCart(id);
    }
  }

  increaseQuantity(id: number) {
    const item = this.cartItems.find((item) => item.id === id);
    if (item) {
      this.cartService.updateQuantity(id, item.quantity + 1);
    }
  }

  productPrice(items: IProduct) {
    return items.price * items.quantity;
  }

  calculateTotalPrice() {
    this.totalPrice = this.cartService.getTotalPrice();
  }
}
