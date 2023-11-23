import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  // constructor(private authService: RandomUserService, private router: Router) {}
 
  ngOnInit(): void {}
 
  // logout(): void {
  //   // Log out
  //   this.authService.logout();
  //   // Redirect to login page
  //   this.router.navigate(["/login"]);
  // }
}

