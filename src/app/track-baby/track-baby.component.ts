import { Component, OnInit } from '@angular/core';
import { NgForm , NgModel } from '@angular/forms';

import {QueryService} from '../query.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-track-baby',
  templateUrl: './track-baby.component.html',
  styleUrls: ['./track-baby.component.scss']
})
export class TrackBabyComponent implements OnInit {
  data:object;
  constructor(private q:QueryService) {
    this.data={};
   }
  
  trackForm(drData:NgForm): void{
    console.log(drData);
    drData.reset();

  }

  getBabyData():void{
    let path:string='./assets/trackBaby.json';
    this.q.getData(path).subscribe(
      res => {console.log(res);
      this.data=res;
      },
      err => {console.log(err);},
      () => {}
    );
  }

  ngOnInit() {

   
    $("button").click(function(){
        $("form").css("display","none");
    })
    
  }


}


