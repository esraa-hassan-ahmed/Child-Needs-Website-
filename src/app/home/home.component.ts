import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {QueryService} from '../query.service';
import {ShopItemComponent} from'../shop-item/shop-item.component';
import { NgForm , NgModel } from '@angular/forms';
import * as $ from 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sec2Data: Array<object>;
  constructor(private q:QueryService , private router:Router) { 
    this.sec2Data=[];
    this.getSec2Data();
  }

  getSec2Data():void{
    let path:string='./assets/homeSec2.json';
    this.q.getData(path).subscribe(
      res => {console.log(res);
      this.sec2Data=res;
      },
      err => {console.log(err);},
      () => {}
    );
  }
  getSec2Media():void{
    let path:string='./assets/sec2HomeMedia.json';
    this.q.getData(path).subscribe(
      res => {console.log(res);
      this.sec2Data=res;
      },
      err => {console.log(err);},
      () => {}
    );
  }

  getSec2Events():void{
    let path:string='./assets/sec2HomeEvents.json';
    this.q.getData(path).subscribe(
      res => {console.log(res);
      this.sec2Data=res;
      },
      err => {console.log(err);},
      () => {}
    );
  }
  
  redirectToPlay():void{
    this.router.navigate(['/play/']);
  }

  contactUs(contactData:NgForm): void{
    console.log(contactData);
    contactData.reset();
  }

  ngOnInit() {
  


    $(window).scroll(function() {
      if ($(this).scrollTop() >= 50) {       
          $('#return-to-top').fadeIn(200);    
      } else {
          $('#return-to-top').fadeOut(200);   
      }
  });
  $('#return-to-top').click(function() {      
      $('body,html').animate({
          scrollTop : 0                     
      }, 500);
  });




  }

}


