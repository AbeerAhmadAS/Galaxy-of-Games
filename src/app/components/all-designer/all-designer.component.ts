import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Designer } from 'src/app/model/Designer';
import { Game } from 'src/app/model/game';
import { VideoGameService } from 'src/app/services/video-game.service';

@Component({
  selector: 'app-all-designer',
  templateUrl: './all-designer.component.html',
  styleUrls: ['./all-designer.component.css']
})
export class AllDesignerComponent implements OnInit {
  desigenr: Designer[] = [];
  
  constructor(private router : Router ,private videoGameService: VideoGameService ) {}

  ngOnInit(): void {
    this.videoGameService.getAllDesigner().subscribe({
      next: (data) => {
        console.log(data);
        this.desigenr = data;

        for (let i in this.desigenr) {
          this.desigenr[i].designerID = data[i].designerID;
        }
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  // goToDesigner(id: number) {
  //   this.router.navigate(['/designer', id]);
  // }
}


