import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoGameService } from 'src/app/services/video-game.service';

@Component({
  selector: 'app-player-game',
  templateUrl: './player-game.component.html',
  styleUrls: ['./player-game.component.css']
})
export class PlayerGameComponent {
  [x: string]: any;
  playerUsername:String  = '';
 gamePlayerList: any[] = [];
  constructor(private route: ActivatedRoute , private videoGameService: VideoGameService) {}

  ngOnInit(): void {
    console.log(this.route);
    this.playerUsername = this.route.snapshot.params['playerUsername'];
    // console.log("Designer ID:", this.designerID);
    
  
    this.videoGameService.getGameByPlayerUsername(this.playerUsername).subscribe({
      next:(data:  any) => {
        console.log("data: ", data);
        this.gamePlayerList = data;
        // console.log("gdl: ", this.gamePlayerList);
        
      },
      error: (e) => {
        console.log(e);        
      }
    });
  }
}



