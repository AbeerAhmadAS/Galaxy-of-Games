import { Component , OnInit} from '@angular/core';
import { Designer } from 'src/app/model/Designer';
import { ActivatedRoute } from '@angular/router';

import { VideoGameService } from 'src/app/services/video-game.service';

@Component({
  selector: 'app-desiner-item',
  templateUrl: './desiner-item.component.html',
  styleUrls: ['./desiner-item.component.css']
})
export class DesinerItemComponent implements OnInit{
  [x: string]: any;
  designerID!: number;
  designerList: Designer | undefined;
image_url: any;

  constructor(private route: ActivatedRoute , private videoGameService: VideoGameService) {}

  ngOnInit(): void {
    this.designerID = this.route.snapshot.params['designerID'];
  
    this.videoGameService.getDesignerItem(this.designerID).subscribe({
        next:(data:  Designer) => {
          console.log(data);
          this.designerList = data;
        },
        error: (e) => {
          console.log(e);        
        }
      });
    }
  }
  
