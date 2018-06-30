import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { DataPipeService } from './data-pipe.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cardItemsQuantities;
  WishListItemsQuantities:number;
  navbarCollapsed: boolean;
  constructor(
    private router: Router,
    private data: DataPipeService
  ) {
    this.data.currentMessage.subscribe(message => this.cardItemsQuantities = message);
    this.navbarCollapsed = true;
  }

  reload(){
    location.reload();
  }

  redirectToLogin(): void {
    this.router.navigate(['/login/']);
  }
  redirectToRegister(): void {
    this.router.navigate(['/register/']);
  }

  ngOnInit() {
        $(".toyBtn").click(function(){
          location.reload();
        });  
        $(".clothesBtn").click(function(){
          location.reload();
        });  
  }
}

