import { Component, OnInit , ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm , NgModel } from '@angular/forms';
import {QueryService} from '../query.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  encapsulation: ViewEncapsulation.None,

  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  closeResult: string;
  drdata: Array<object>;
  dr_name: string;
  dr_address: any;
  dr_facebook: any;
  dr_gmail: any;
  dr_Skype: any;
  dr_description: string;

  constructor(
    private q:QueryService , 
    private modalService: NgbModal
  ) { 
    this.drdata=[];
    this.getDrData();
  }

  getDrData(): void{
    let path: string = './assets/dr.json';
    this.q.getData(path).subscribe(
      res => {
        this.drdata = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }


  getConsultantData():void{
    let path:string='./assets/drConsultant.json';
    this.q.getData(path).subscribe(
      res => {console.log(res);
      this.drdata=res;
      },
      err => {console.log(err);},
      () => {}
    );
  }


  getWomentData():void{
    let path:string='./assets/drWomen.json';
    this.q.getData(path).subscribe(
      res => {console.log(res);
      this.drdata=res;
      },
      err => {console.log(err);},
      () => {}
    );
  }

  getDentistData():void{
    let path:string='./assets/drDentist.json';
    this.q.getData(path).subscribe(
      res => {console.log(res);
      this.drdata=res;
      },
      err => {console.log(err);},
      () => {}
    );
  }







    openVerticallyCentered(content) {
      this.modalService.open(content, { centered: true });
    }


    addDR(drData:NgForm): void{
      console.log(drData);
      drData.reset();

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

