import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Designer } from 'src/app/model/Designer';
import { Game } from 'src/app/model/game';
import { VideoGameService } from 'src/app/services/video-game.service';

@Component({
  selector: 'app-designer-game',
  templateUrl: './designer-game.component.html',
  styleUrls: ['./designer-game.component.css']
})
export class DesignerGameComponent implements OnInit {
  [x: string]: any;
  designerUsername : String = '';
  gameDesignerList: any[] = [];
  designerID : number =0
  // designer :any[] = [];
  constructor(private route: ActivatedRoute ,private router: Router, private videoGameService: VideoGameService) {}

  ngOnInit(): void {
    console.log(this.route);
    this.designerUsername = this.route.snapshot.params['designerUsername'];
    console.log("designerUsername:", this.designerUsername);
    
  
    this.videoGameService.getGameByDesignerUsername(this.designerUsername).subscribe({
      next:(data:  any) => {
        console.log("data: ", data);
        this.gameDesignerList = data;
        console.log("gdl: ", this.gameDesignerList);
        
      },
      error: (e) => {
        console.log(e);        
      }
    });
  }
  deleteGame(gameId: number): void {
    if (confirm("Do you want to delete this game?")) {
      // this.designerUsername = this.route.snapshot.params['designerUsername'];
      this.videoGameService.deleteGame(gameId).subscribe({
        next: () => {
          console.log('Game deleted successfully');
          this.ngOnInit();
        },
        error: (error: any) => {
          console.error('Error deleting game:', error);
        },
      });
    }
  } 
  
  // add(){
  //   // this.designerID = +this.route.snapshot.params['designerID'];
    

  //   this.router.navigate(['/'+this.gameDesignerList[0]?.designBy?.designerID+'/NewGames']);

  // }
}

