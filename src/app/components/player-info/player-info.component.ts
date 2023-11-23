import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/model/player';
import { VideoGameService } from 'src/app/services/video-game.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent {
  [x: string]: any;
  playerID: number = 0;
  playerList: Player = new Player({});
  image_url: any;
  playerUsername:String  = '';

  constructor(private route: ActivatedRoute , private videoGameService: VideoGameService) {}

  ngOnInit(): void {
    console.log(this.route);
    this.playerUsername = this.route.snapshot.params['playerUsername'];
  
    this.videoGameService.getAllplayerUsername(this.playerUsername).subscribe({
      next:(data:  any) => {
        console.log("data: ", data);
        this.playerList = data;
        // console.log("gdl: ", this.gamePlayerList);
        
      },
      error: (e) => {
        console.log(e);        
      }
    });
  }
}
