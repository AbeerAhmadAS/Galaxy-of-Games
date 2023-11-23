import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-com-login',
  templateUrl: './com-login.component.html',
  styleUrls: ['./com-login.component.css']
})
export class ComLoginComponent {
  loginForm: FormGroup;
  usernameInput: FormControl;
  passwordInput: FormControl;

  // playerId : number =0;
  constructor(private router: Router) {
    this.usernameInput = new FormControl("", 
      Validators.required,
    );
    
    this.passwordInput = new FormControl("", [Validators.required]);
    this.loginForm = new FormGroup({
      username: this.usernameInput,
      password: this.passwordInput,
    });
  }
 
  ngOnInit(): void {}
 
  login() {
    this.router.navigate(['/company']);
  }
}

