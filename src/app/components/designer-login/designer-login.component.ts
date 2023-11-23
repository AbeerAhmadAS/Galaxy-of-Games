import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-designer-login',
  templateUrl: './designer-login.component.html',
  styleUrls: ['./designer-login.component.css']
})
export class DesignerLoginComponent {
  loginForm: FormGroup;
  designerUsernameinput: FormControl;
  passwordInput: FormControl;

  // playerId : number =0;
  constructor(private router: Router) {
    this.designerUsernameinput = new FormControl("", 
      Validators.required,
    );
    
    this.passwordInput = new FormControl("", [Validators.required]);
    this.loginForm = new FormGroup({
      designerUsername: this.designerUsernameinput,
      password: this.passwordInput,
    });
  }
 
  ngOnInit(): void {}
 
  login() {
    console.log(this.loginForm.value);
    // console.log(this.designe)
    this.router.navigate(['/games/designerUsername/'+this.designerUsernameinput]);
  }
}
