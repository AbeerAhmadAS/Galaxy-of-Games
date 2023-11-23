import { Component , OnInit , EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/model/game';
import { VideoGameService } from 'src/app/services/video-game.service';

@Component({
  selector: 'app-list-player-game',
  templateUrl: './list-player-game.component.html',
  styleUrls: ['./list-player-game.component.css']
})
export class ListPlayerGameComponent implements OnInit {
  game:Game[]=[];
  playerID : number = 0 ;
  gameId : number = 0 ;
  constructor( private router : ActivatedRoute, private videoGameService: VideoGameService ) {}

  ngOnInit(): void {
    
    this.videoGameService.getAllGame().subscribe({
      next: (data) => {
        console.log(data);
        this.game = data;
        console.log(this.game);

        for (let i in this.game) {
          this.game[i].gameID = data[i].gameID;
        }
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  patch(gameId: number){
    this.playerID = +this.router.snapshot.params['playerID'];
//    this.gameId = +this.router.snapshot.params['gameID'];
    // const body = this.game

    this.videoGameService.patchGamePlayer(this.playerID, gameId).subscribe({
      next:(response) => {
      console.log('game added:', response);
      alert("THE GAME IS ADDED")
      // this.router.url(['/home']);
      

      this.game.splice(gameId, 1);

    },
    error: (error) => {
      console.log('Error ADDED Game:',error);
    }
    });
  }
}
 