import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-player-login',
  templateUrl: './player-login.component.html',
  styleUrls: ['./player-login.component.css']
})
export class PlayerLoginComponent {
  loginForm: FormGroup;
  playerUsernameInput: FormControl;
  passwordInput: FormControl;

  // playerId : number =0;
  constructor(private router: Router) {
    this.playerUsernameInput = new FormControl("", 
      Validators.required,
    );
    
    this.passwordInput = new FormControl("", [Validators.required]);
    this.loginForm = new FormGroup({
      playerUsername: this.playerUsernameInput,
      password: this.passwordInput,
    });
  }
 
  ngOnInit(): void {}
 
  login() {
    this.router.navigate(['/games/playerUsername/'+this.playerUsernameInput.value]);
  }
}



