import { Component, OnInit } from '@angular/core';
import {QueryService} from '../query.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {
  schoolData: Array<object>;
  constructor(private q:QueryService) { 
    this.schoolData=[];
    this.getschoolData();
  }
  getschoolData():void{
    let path:string='./assets/school.json';
    this.q.getData(path).subscribe(
      res => {console.log(res);
      this.schoolData=res;
      },
      err => {console.log(err);},
      () => {}
    );
  }
  getMschoolData():void{
    let path:string='./assets/Mschool.json';
    this.q.getData(path).subscribe(
      res => {console.log(res);
      this.schoolData=res;
      },
      err => {console.log(err);},
      () => {}
    );
  }
  getEschoolData():void{
    let path:string='./assets/Eschool.json';
    this.q.getData(path).subscribe(
      res => {console.log(res);
      this.schoolData=res;
      },
      err => {console.log(err);},
      () => {}
    );
  }
  getPschoolData():void{
    let path:string='./assets/Pschool.json';
    this.q.getData(path).subscribe(
      res => {console.log(res);
      this.schoolData=res;
      },
      err => {console.log(err);},
      () => {}
    );
  }

  
stage(type:string){
  if (type=="All"){
    this.getPschoolData();
  }
  else{
    this.q.getData('assets/Pschool.json').subscribe(res =>{
      this.schoolData=[];
      res.forEach(element => {
        if(element.stage == type){
          this.schoolData.push(element);
        }
      });
    });
  } 
}

  ngOnInit() {
    $(document).ready(function(){ 
      $(".dropdown-menu button").click(function(){
        console.log($(".dropdown-menu button"));
          $("#myText").eq(0).html($(this).text());
      });
    });
  }

}
