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

      price: 199.99,

      short_description:
        ' Stay connected on the go with this sleek and versatile smartwatch.',
    },
    {
      title: 'Smart Assistant',

      price: 149.99,

      short_description:
        ' Make your life easier with this smart assistant that can answer your questions.',
    },
    {
      title: 'Smartphone',

      price: 699.99,

      short_description:
        ' Stay connected and productive on the go with this powerful smartphone.   ',
    },
    {
      title: 'Earbuds',

      price: 129.99,

      short_description:
        ' Enjoy your favorite music and podcasts with these comfortable earbuds.',
    },
    {
      title: 'Tablet',

      price: 399.99,

      short_description:
        ' Stay productive and entertained on the go with this versatile tablet.',
    },
    {
      title: 'Portable Speaker',

      price: 99.99,

      short_description:
        ' Take your music anywhere with this compact and powerful portable speaker.',
    },
    {
      title: 'Web Camera',

      price: 59.99,

      short_description: ' Stay connected with this high-quality web camera. ',
    },
  ];
}
