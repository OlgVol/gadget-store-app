import { Component } from '@angular/core';

@Component({
  selector: 'app-feature-section',
  templateUrl: './feature-section.component.html',
  styleUrls: ['./feature-section.component.scss']
})
export class FeatureSectionComponent {
  title = 'Why Choose us?'

  cards = [{
    title: 'Wireless Freedom',
    content: 'wireless gadget that provide freedom of movement while using them',
    imgUrl: '../../assets/images/wifi.png'
  },
  {
    title: 'Stay Connect',
    content: 'gadget that help people stay connected with their loved ones and colleagues',
    imgUrl: '../../assets/images/smart-device.png'
  },
  {
    title: 'Smart Home',
    content: 'gadget that make your home smarter and more efficient at the space of your own home',
    imgUrl: '../../assets/images/smart-home.png'
  }
]

}
