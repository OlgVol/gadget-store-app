import { Component } from '@angular/core';
import { IProduct } from '../models/product.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
products: IProduct[] =[
  {
    "id": 8,
    "title": "Web Camera",
    "price": "59.99",
    "short_description": " Stay connected with this high-quality web camera. ",
    "long_description": "This web camera is perfect for video conferencing, streaming, and more. With high-quality video and audio, you can stay connected with friends, family, and colleagues from anywhere.",
    "year": 2022,
    "RAM": "N/A",
    "warranty_period": "1 year",
    "imgUrl": "./assets/images/webcam.png",
  }
]

title = "Shopping Cart"
}
