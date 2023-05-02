import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: IProduct[] = [];
  private cartItemsSubject = new BehaviorSubject<IProduct[]>([]);
  public cartItems$ = this.cartItemsSubject.asObservable();

  constructor(public http: HttpClient) {}

  addToCart(product: IProduct) {
    const cartItems = this.cartItemsSubject.getValue();
    const itemIndex = cartItems.findIndex((item) => item.id === product.id);

    if (itemIndex > -1) {
      cartItems[itemIndex].quantity += 1;
    } else {
      product.quantity = 1;
      cartItems.push(product);
    }
    this.cartItemsSubject.next(cartItems);
  }
  updateQuantity(id: number, quantity: number) {
    const cartItems = this.cartItemsSubject.getValue();
    const itemIndex = cartItems.findIndex((item) => item.id === id);

    if (itemIndex > -1) {
      cartItems[itemIndex].quantity = quantity;
      this.cartItemsSubject.next(cartItems);
    }
  }

  removeFromCart(id: number) {
    const cartItems = this.cartItemsSubject.getValue();
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    this.cartItemsSubject.next(updatedCartItems);
  }
  getTotalPrice() {
    const cartItems = this.cartItemsSubject.getValue();
    let totalPrice = 0;
    for (const item of cartItems) {
      totalPrice += item.quantity * item.price;
    }
    return totalPrice;
  }
}
