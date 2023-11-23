import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/model/player';
import { VideoGameService } from 'src/app/services/video-game.service';

@Component({
  selector: 'app-player-item',
  templateUrl: './player-item.component.html',
  styleUrls: ['./player-item.component.css']
})
export class PlayerItemComponent implements OnInit {
  [x: string]: any;
  playerID: number = 0;
  playerList: Player = new Player({});
  image_url: any;

  constructor(private route: ActivatedRoute , private videoGameService: VideoGameService) {}

  ngOnInit(): void {
    console.log(this.route);
    this.playerID = +this.route.snapshot.params['playerID'];
  
    this.videoGameService.getPlayerItem(this.playerID).subscribe({
      next:(data:  Player) => {
        console.log(data);
        this.playerList = data;
      },
      error: (e) => {
        console.log(e);        
      }
    });
  }
}


