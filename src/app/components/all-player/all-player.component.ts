import { Component , OnInit} from '@angular/core';
import { Player } from 'src/app/model/player';
import { VideoGameService } from 'src/app/services/video-game.service';

@Component({
  selector: 'app-all-player',
  templateUrl: './all-player.component.html',
  styleUrls: ['./all-player.component.css']
})
export class AllPlayerComponent implements OnInit {
  constructor(private videoGameService: VideoGameService ) {}
  player: Player[] = [];

  ngOnInit(): void {
    this.videoGameService.getAllplayer().subscribe(
      (data: Player[]) => {
        this.player = data;
        console.log(this.player); 
      },
      (error) => {
        console.log(error); 
      }
    );
  }

  // goToCoffee(id: number) {
  //   this.router.navigate(['/coffee', id]);
  // }
}

