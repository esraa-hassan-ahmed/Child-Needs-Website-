import { Component, OnInit } from '@angular/core';
import {QueryService} from '../query.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss']
})
export class SportComponent implements OnInit {
  sportData: Array<object>;
  constructor(private q:QueryService) { 
    this.sportData=[];
    this.getSportData();
  }

  getSportData():void{
    let path:string='./assets/sportData.json';
    this.q.getData(path).subscribe(
      res => {console.log(res);
      this.sportData=res;
      },
      err => {console.log(err);},
      () => {}
    );
  }
  getSwimData():void{
    let path:string='./assets/swimming.json';
    this.q.getData(path).subscribe(
      res => {console.log(res);
      this.sportData=res;
      },
      err => {console.log(err);},
      () => {}
    );
  }
  getKarateData():void{
    let path:string='./assets/karate.json';
    this.q.getData(path).subscribe(
      res => {console.log(res);
      this.sportData=res;
      },
      err => {console.log(err);},
      () => {}
    );
  }
  getBalletData():void{
    let path:string='./assets/ballet.json';
    this.q.getData(path).subscribe(
      res => {console.log(res);
      this.sportData=res;
      },
      err => {console.log(err);},
      () => {}
    );
  }
  getFootballData():void{
    let path:string='./assets/football.json';
    this.q.getData(path).subscribe(
      res => {console.log(res);
      this.sportData=res;
      },
      err => {console.log(err);},
      () => {}
    );
  }


  ngOnInit() {
    $(".dropdown-menu button").click(function(){
      console.log($(".dropdown-menu button"));
        $("#myText").eq(0).html($(this).text());
    });     
  }

}
