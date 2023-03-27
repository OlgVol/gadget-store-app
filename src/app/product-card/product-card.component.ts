import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  product = [
    {
      title: 'Smartwatch',
      price: '199.99',
      imgUrl: '../../assets/images/smartwatch.png',
      description:
        'This smartwatch offers a range of features including fitness tracking, notifications, and voice commands. Its long-lasting battery and durable design make it perfect for everyday wear.'
    }
  ];
}
