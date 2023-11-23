import { Component , OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router, Routes } from '@angular/router';
import { VideoGameService } from 'src/app/services/video-game.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent  implements OnInit{
  registerForm: FormGroup;
  nameInput: FormControl;
  typeInput: FormControl;
  priceInput: FormControl;
  deviceGameRunningOnInput :FormControl;
  linkInput: FormControl;
  descreptionInput: FormControl;
  designerID : number = 0;
  designerUsername :string='';

  constructor(private route : ActivatedRoute  , private videoGame: VideoGameService,private router :Router) {
    this.nameInput = new FormControl('', Validators.required);
    this.typeInput = new FormControl('', Validators.required,);
    this.priceInput = new FormControl(50, [Validators.required,Validators.max(5000),Validators.min(50)]);
    this.deviceGameRunningOnInput = new FormControl('',Validators.required);
    this.linkInput = new FormControl('', Validators.required);
    this.descreptionInput = new FormControl('', Validators.required,);

    this.registerForm = new FormGroup({
      gameName: this.nameInput,
      gameType: this.typeInput,
      gamePrice: this.priceInput,
      deviceGameRunningOn:this.deviceGameRunningOnInput,
      gameLink: this.linkInput,
      description : this.descreptionInput
     
    });
 

  }
  ngOnInit(): void {
    
  }
    onSubmit() {
      if (this.registerForm.valid) {
        const body = this.registerForm.value;
        this.designerID = +this.route.snapshot.params['designerID'];
        this.designerUsername = this.route.snapshot.params['designerUsername']

        this.videoGame.postGame(this.designerID,body).subscribe({
          next:(response) => {
            console.log('game created:', response);
            alert("THE GAME IS CREATED")
  
            this.registerForm.reset();
            window.location.reload();
            // this.router.navigate(['games/designerUsername/'+this.designerUsername]);
          },
          error: (error) => {
            console.log('Error creating Game:',error);
          }
         });
      }
    }
  }


