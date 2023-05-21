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
  data:object = {};
  showDataFlag:boolean = false;
  baby_birth: any;
  baby_weight: number;
  eat_time: number;

  constructor(private q:QueryService) {
    this.data={};
   }
  
  trackForm(drData:NgForm): void{
    drData.reset();
  }

  getBabyData():void{
    let path:string='./assets/trackBaby.json';
    this.q.getData(path).subscribe(
      res => {
        this.data=res;
        this.showDataFlag = true;
      },
      err => {
        this.showDataFlag = false;
      },
      () => {}
    );
  }

  ngOnInit() {
    
  }


}


