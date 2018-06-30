import { Component, OnInit } from '@angular/core';
import { QueryService } from '../query.service';
import { EventEmitter } from '@angular/core';
import { DataPipeService } from '../data-pipe.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.scss']
})
export class ToysComponent implements OnInit {
  toysData: Array<object>;
  priceRange: Array<any>;
  colorStorage;
  constructor(
    private q: QueryService,
    private data: DataPipeService
  ) {
    this.toysData = [];
    this.priceRange = [];
    this.getToysData();
    this.q.setUrlHistoryObj("./assets/toys.json");
   }

   getToysData(): void {
    this.toysData = [];
    let path: string = './assets/toys.json';
    this.q.getData(path).subscribe(
      res => {
        this.toysData = res;
        // console.log(res);
      },
      err => {
        // console.log(err);
      }
    );
  }

  addItemToCart(id: number) {
    if(localStorage.getItem('cart')){
      var cart = JSON.parse(localStorage.getItem('cart'));
      if(cart.indexOf(id) == -1){
        cart.push(id);
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    }
    else{
      localStorage.setItem('cart',JSON.stringify([id]));
    }
    this.newMessage();
  }

  addWishListCart(id: number) {
    if(localStorage.getItem('wishList')){
      var wishList = JSON.parse(localStorage.getItem('wishList'));
      if(wishList.indexOf(id) == -1){
        wishList.push(id);
        localStorage.setItem('wishList', JSON.stringify(wishList));
      }
    }
    else{
      localStorage.setItem('wishList',JSON.stringify([id]));
    }
  }

  newMessage() {
    this.data.changeMessage(JSON.parse(localStorage.getItem('cart')).length)
  }
  

  addColor(color:string){ 
      this.q.getData('assets/toys.json').subscribe(res =>{
        this.toysData=[];
        res.forEach(element => {
          // console.log(element.color);
          // console.log(color);
          if(element.color == color){
            this.toysData.push(element);
          }
        });
        // console.log(this.toysData);
      });
  }
  addPrice(a,b){
    this.q.getData('assets/toys.json').subscribe(res =>{
      this.toysData=[];
      res.forEach(element => {
        console.log(element.price);
        if(parseInt(element.price) >= a && parseInt(element.price) < b ){
          this.toysData.push(element);
        }
      });
    });
  }

  arrange(type:String){
    this.q.getData('assets/toys.json').subscribe(res =>{
      this.toysData=[];
      this.priceRange=[];
      res.forEach(element => {
        this.priceRange.push(parseInt(element.price));
      });
      if(type=="ascending"){
        this.priceRange.sort(function(a, b){return a-b});
      }
      else if (type=="descending"){
        this.priceRange.sort(function(a, b){return b-a});
      }
      for (var i = 0 ; i<this.priceRange.length ; i++ ){
        res.forEach(element => {
          if (parseInt(element.price) == this.priceRange[i]){
            this.toysData.push(element);
          }
        });
      }
    });
  }




  ngOnInit() {
    $(document).ready(function(){
    $(".dropdown-menu button").click(function(){
        console.log($(".dropdown-menu button"));
        $("#myText").eq(0).html($(this).text());
    }); 
    $(".allBtn").click(function(){
        location.reload();
    });  
    $(".cart").on("click",function(){
      $(this).find("i").css("color","#e21c3f");
    });
  });
  }
}
