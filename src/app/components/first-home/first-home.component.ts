import { Component } from '@angular/core';

@Component({
  selector: 'app-first-home',
  templateUrl: './first-home.component.html',
  styleUrls: ['./first-home.component.css']
})
export class FirstHomeComponent {
  scrollToTarget() {
    const targetElement = document.getElementById('cards');

    if (targetElement) {
      // Smooth scroll to the target section
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
