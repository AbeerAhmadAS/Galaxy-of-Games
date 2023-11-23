import { Component ,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/model/game';
import { VideoGameService } from 'src/app/services/video-game.service';

@Component({
  selector: 'app-all-game',
  templateUrl: './all-game.component.html',
  styleUrls: ['./all-game.component.css']
})
export class AllGameComponent implements OnInit{
  game:Game[]=[];
  
  constructor(private router : Router, private videoGameService: VideoGameService ) {}

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


  // goToCoffee(id: number) {
  //   this.router.navigate(['/games/id', id]);
  // }
}
 