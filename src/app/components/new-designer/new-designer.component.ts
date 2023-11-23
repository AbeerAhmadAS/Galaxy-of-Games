import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VideoGameService } from 'src/app/services/video-game.service';

@Component({
  selector: 'app-new-designer',
  templateUrl: './new-designer.component.html',
  styleUrls: ['./new-designer.component.css']
})
export class NewDesignerComponent implements OnInit {
  registerForm: FormGroup;
  nameInput: FormControl;
  usernameInput: FormControl;
  passwordInput: FormControl;
  emailInput: FormControl;
  nationalityInput: FormControl;
  aboutYouInput :FormControl;
 

  constructor(private videoGame: VideoGameService, private router :Router) {
    this.nameInput = new FormControl('', Validators.required);
    this.usernameInput = new FormControl('', Validators.required);
    this.passwordInput = new FormControl('', Validators.required);
    this.emailInput = new FormControl('', [Validators.required,Validators.email]);
    this.nationalityInput = new FormControl('', Validators.required);
    this.aboutYouInput = new FormControl('',Validators.required);

    this.registerForm = new FormGroup({
      designerName: this.nameInput,
      designerEmail: this.emailInput,
      designerNationality: this.nationalityInput,
      aboutYou:this.aboutYouInput,
      designerUsername: this.usernameInput,
      password: this.passwordInput,



     
    });
 

  }
  ngOnInit(): void {
    
  }
    onSubmit() {
      if (this.registerForm.valid) {
        const body = this.registerForm.value;
  
        this.videoGame.postdesigner(body).subscribe(
          (response) => {
            console.log('designer created:', response);
            alert("THE DESIGNER IS CREATED")
  
            this.registerForm.reset();
            // window.location.reload();
            this.router.navigate(["/login/designer"]);
          },
          (error) => {
            console.error('Error creating Designer:', error);
          }
        );
      }
    }
  }

