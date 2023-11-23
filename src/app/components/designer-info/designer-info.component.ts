import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Designer } from 'src/app/model/Designer';
import { VideoGameService } from 'src/app/services/video-game.service';

@Component({
  selector: 'app-designer-info',
  templateUrl: './designer-info.component.html',
  styleUrls: ['./designer-info.component.css']
})
export class DesignerInfoComponent {
  [x: string]: any;
  designerID!: number;
  designerList: Designer | undefined;
image_url: any;
designerUsername : String = '';


  constructor(private route: ActivatedRoute , private videoGameService: VideoGameService) {}

  ngOnInit(): void {
    console.log(this.route);
    this.designerUsername = this.route.snapshot.params['designerUsername'];
    console.log("designerUsername:", this.designerUsername);
    
  
    this.videoGameService.getDesigneByDesignerUsernamer(this.designerUsername).subscribe({
      next:(data:  any) => {
        console.log("data: ", data);
        this.designerList = data;
        console.log("gdl: ", this.designerList);
        
      },
      error: (e) => {
        console.log(e);        
      }
    });
  }
}
