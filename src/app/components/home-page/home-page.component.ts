import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  name: string | null;
  constructor() {
    this.name = "John Doe";
  }
 
  ngOnInit(): void {}

  scrollToTarget() {
    const targetElement = document.getElementById('cards');

    if (targetElement) {
      // Smooth scroll to the target section
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
