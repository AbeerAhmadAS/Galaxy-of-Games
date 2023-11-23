import { Component , OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/model/game';
import { VideoGameService } from 'src/app/services/video-game.service';

@Component({
  selector: 'app-up-date',
  templateUrl: './up-date.component.html',
  styleUrls: ['./up-date.component.css']
})
export class UpDateComponent implements OnInit {
  gamelist: Game;
 
  updateProjectForm: FormGroup;
  typeInput: FormControl;
  priceInput: FormControl;
  linkInput: FormControl;
  descreptionInput: FormControl;
 
  constructor(
    private videoGameService: VideoGameService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.typeInput = new FormControl("", []);
    this.priceInput = new FormControl("", []);
    this.linkInput = new FormControl("", []);
    this.descreptionInput = new FormControl("", []);
    this.updateProjectForm = new FormGroup({
      gameType : this.typeInput,
      gamePrice: this.priceInput,
      gameLink: this.linkInput,
      description:this.descreptionInput,
    });
 
    this.gamelist = new Game({});
  }
 
  ngOnInit(): void {
    const gameID: number | null = this.activatedRoute.snapshot.params["gameID"];
 
    if (gameID !== null) {
      this.videoGameService.getGameItem(gameID).subscribe({
        next: (gameList: Game) => {
          this.gamelist = gameList;
 
          // Set default values for form
          this.typeInput.setValue(gameList.gameType);
          this.priceInput.setValue(gameList.gamePrice);
          this.linkInput.setValue(gameList.gameLink);
          this.descreptionInput.setValue(gameList.description);
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
 
  updateProject(): void {
    // Update project
    const body = this.updateProjectForm.value;
    if(this.gamelist.designBy && this.gamelist.designBy.designerID) body.designBy = { designerID: this.gamelist.designBy.designerID};
    this.videoGameService.putGame(this.gamelist.gameID,body).subscribe({
      next: () => {
        // Redirect to detail page
        // this.router.navigate(["/projects", this.project.id]);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   [x: string]: any;
//   gameID: number = 0;
//   // designerID: number =0;
//   gameList:any[]=[];

//   registerForm: FormGroup;
//   typeInput: FormControl;
//   priceInput: FormControl;
//   deviceGameRunningOnInput :FormControl;
//   linkInput: FormControl;
//   descreptionInput: FormControl;
 

//   constructor(private route : ActivatedRoute  , private videoGameService: VideoGameService) {
//     this.typeInput = new FormControl('', Validators.required,);
//     this.priceInput = new FormControl(50, [Validators.required,Validators.max(5000),Validators.min(50)]);
//     this.deviceGameRunningOnInput = new FormControl('',Validators.required);
//     this.linkInput = new FormControl('', Validators.required);
//     this.descreptionInput = new FormControl('', Validators.required,);

//     this.registerForm = new FormGroup({
//       gameType: this.typeInput,
//       gamePrice: this.priceInput,
//       deviceGameRunningOn:this.deviceGameRunningOnInput,
//       gameLink: this.linkInput,
//       description : this.descreptionInput
     
//     });
 

//   }


//   ngOnInit(): void {
//     console.log(this.route);
//     this.gameID = +this.route.snapshot.params['gameID'];
  
//     this.videoGameService.getGameItem(this.gameID).subscribe({
//       next:(data:  any) => {
//         console.log("data: ", data);
//         this.gameList = data;
//         // console.log("gdl: ", this.gameList);
        
//       },
//       error: (e) => {
//         console.log(e);        
//       }
//     });
//   }


//   onSubmit() {
//     if (this.registerForm.valid) {
//       const body = this.registerForm.value;
//       // this.designerID = +this.route.snapshot.params['designerID'];
//       this.gameID = +this.route.snapshot.params['gameID']

//       this.videoGameService.putGame(this.gameID,body).subscribe({
//         next:(response) => {
//           console.log('The game has been updated', response);
//           alert("THE GAME HAS BEEN UPDATED")

//           this.registerForm.reset();
//           window.location.reload();
//           // this.route.navigate(['/home']);

//         },
//         error: (error) => {
//           console.log('Error creating Game:',error);
//         }
//        });
//     }
//   }

// }