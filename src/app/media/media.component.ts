import { Component, OnInit } from '@angular/core';
import {QueryService} from '../query.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  term: string;
  videoData=[{
     link:'1hyjLD7pk10'
   },
   {
    link:'1hyjLD7pk10'
  },
  {
    link:'1hyjLD7pk10'
  }]
  constructor(private q:QueryService,
  private santizier:DomSanitizer) { 
    this.videoData=[];
    this.getVideoData();
  }

  getVideoData():void{
    let path:string='./assets/mediaVideos.json';
    this.q.getData(path).subscribe(
      res => {console.log(res);
      this.videoData=res;
      },
      err => {console.log(err);},
      () => {}
    );
  }



  ngOnInit() {
  }


  getEmbedURL(data){
    // 'http://www.youtube.com/embed/1hyjLD7pk10?ecver=2'
    return this.santizier.bypassSecurityTrustResourceUrl('http://www.youtube.com/embed/'+data)
  }

}
