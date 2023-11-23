import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/model/game';
import { VideoGameService } from 'src/app/services/video-game.service';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})
export class GameItemComponent implements OnInit {
  [x: string]: any;
  gameID: number = 0;
  gameList: Game = new Game({});
  image_url: any;

  constructor(private route: ActivatedRoute , private videoGameService: VideoGameService) {}

  ngOnInit(): void {
    console.log(this.route);
    this.gameID = +this.route.snapshot.params['gameID'];
  
    this.videoGameService.getGameItem(this.gameID).subscribe({
      next:(data:  Game) => {
        console.log(data);
        this.gameList = data;
      },
      error: (e) => {
        console.log(e);        
      }
    });
  }
}
