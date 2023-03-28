import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localFr from '@angular/common/locales/fr';

registerLocaleData(localFr, 'fr');

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  goToDetails() {
    console.log('details');
  }
  goToMenu() {
    console.log('menu');
  }
  addToCard() {
    console.log('added to card');
  }
  product = [
    {
      title: 'Smartwatch',

      price: 199.99,

      short_description:
        ' Stay connected on the go with this sleek and versatile smartwatch.',
      imgUrl: '../../../assets/images/smartwatch.png',
    },
    {
      title: 'Smart Assistant',

      price: 149.99,

      short_description:
        ' Make your life easier with this smart assistant that can answer your questions.',
      imgUrl: '../../../assets/images/smart_assistant.png',
    },
    {
      title: 'Smartphone',

      price: 699.99,

      short_description:
        ' Stay connected and productive on the go with this powerful smartphone.   ',
      imgUrl: '../../../assets/images/smartphone.png',
    },
    {
      title: 'Earbuds',

      price: 129.99,

      short_description:
        ' Enjoy your favorite music and podcasts with these comfortable earbuds.',
      imgUrl: '../../../assets/images/earbuds.png',
    },
    {
      title: 'Tablet',

      price: 399.99,

      short_description:
        ' Stay productive and entertained on the go with this versatile tablet.',
      imgUrl: '../../../assets/images/tablet.png',
    },
    {
      title: 'Portable Speaker',

      price: 99.99,

      short_description:
        ' Take your music anywhere with this compact and powerful portable speaker.',
      imgUrl: '../../../assets/images/portable_speaker.png',
    },
    {
      title: 'Web Camera',

      price: 59.99,

      short_description: ' Stay connected with this high-quality web camera. ',
      imgUrl: '../../../assets/images/webcam.png',
    },
  ];
}
