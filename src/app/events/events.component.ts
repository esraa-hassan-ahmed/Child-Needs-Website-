import { Component, OnInit } from '@angular/core';
import {QueryService} from '../query.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  eventsData: Array<object>;
  constructor(private q:QueryService) {
    this.eventsData=[];
    this.geteventsData();
  }

  geteventsData():void{
    let path:string='./assets/events.json';
    this.q.getData(path).subscribe(
      res => {console.log(res);
      this.eventsData=res;
      },
      err => {console.log(err);},
      () => {}
    );
  }
  getABeventsData():void{
    let path:string='./assets/ABevents.json';
    this.q.getData(path).subscribe(
      res => {console.log(res);
      this.eventsData=res;
      },
      err => {console.log(err);},
      () => {}
    );
  }
  getACeventsData():void{
    let path:string='./assets/ACevents.json';
    this.q.getData(path).subscribe(
      res => {console.log(res);
      this.eventsData=res;
      },
      err => {console.log(err);},
      () => {}
    );
  }
  getPCeventsData():void{
    let path:string='./assets/PCevents.json';
    this.q.getData(path).subscribe(
      res => {console.log(res);
      this.eventsData=res;
      },
      err => {console.log(err);},
      () => {}
    );
  }

  ngOnInit() {
  }

}
