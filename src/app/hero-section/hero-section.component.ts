import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent {
  title = 'Experience the Future of Technology Today!';

  constructor(public router: Router) {}
  goToProductPage() {
    this.router.navigateByUrl('/products');
  }
}
