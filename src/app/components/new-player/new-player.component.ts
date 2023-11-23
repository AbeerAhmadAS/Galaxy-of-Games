import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VideoGameService } from 'src/app/services/video-game.service';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.css']
})
export class NewPlayerComponent {
  registerForm: FormGroup;
  nameInput: FormControl;
  emailInput: FormControl;
  ageyInput: FormControl;
  aboutYouInput :FormControl;
  playerUsernameInput: FormControl;
  passwordInput: FormControl;

  constructor(private videoGame: VideoGameService,private router: Router) {
    this.nameInput = new FormControl('', Validators.required);
    this.emailInput = new FormControl('', [Validators.required,Validators.email]);
    this.ageyInput = new FormControl('', [Validators.required,Validators.max(50),Validators.min(10)]);
    this.aboutYouInput = new FormControl('',Validators.required);
    this.playerUsernameInput = new FormControl('',Validators.required);
    this.passwordInput = new FormControl('',Validators.required);

    this.registerForm = new FormGroup({
      playerName: this.nameInput,
      playerEmail: this.emailInput,
      playerAge: this.ageyInput,
      aboutYou:this.aboutYouInput,
      playerUsername: this.playerUsernameInput,
      password: this.passwordInput
     
    });
 

  }
  ngOnInit(): void {
    
  }
    onSubmit() {
      if (this.registerForm.valid) {
        const body = this.registerForm.value;
  
        this.videoGame.postPlayer(body).subscribe(
          (response) => {
            console.log('player created:', response);
            alert("THE PLAYER IS CREATED")
  
            this.registerForm.reset();
            // window.location.reload();
            this.router.navigate(["/login/player"]);
          },
          (error) => {
            console.error('Error creating Player:', error);
          }
        );
      }
    }
  }

  