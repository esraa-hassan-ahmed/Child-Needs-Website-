import { Component, OnInit, Output } from '@angular/core';
import { QueryService } from '../query.service';
import { EventEmitter } from '@angular/core';
import { DataPipeService } from '../data-pipe.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  mydata: Array<object>;
  priceRange: Array<any>;
  constructor(
    private q: QueryService,
    private data: DataPipeService
  ) {
    this.mydata = [];
    this.priceRange = [];
    this.getCardData();
    this.q.setUrlHistoryObj("./assets/shop.json");
  }

  getCardData(): void {
    let path: string = './assets/shop.json';
    this.q.getData(path).subscribe(
      res => {
        this.mydata = res;
        console.log(res);
      },
      err => {
        console.log(err);
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
    this.q.getData('assets/shop.json').subscribe(res =>{
      this.mydata=[];
      res.forEach(element => {
        console.log(element.color);
        console.log(color);
        if(element.color == color){
          this.mydata.push(element);
        }
      });
      // console.log(this.toysData);
    });
  }
  addPrice(a,b){
    this.q.getData('assets/shop.json').subscribe(res =>{
      this.mydata=[];
      res.forEach(element => {
        console.log(element.price);
        if(parseInt(element.price) >= a && parseInt(element.price) < b ){
          this.mydata.push(element);
        }
      });
    });
  }
  addSize(size:string){
    this.q.getData('assets/shop.json').subscribe(res =>{
      this.mydata=[];
      res.forEach(element => {
        console.log(element.price);
        if(element.size == size ){
          this.mydata.push(element);
        }
      });
    });
  }

  arrange(type:String){
    this.q.getData('assets/shop.json').subscribe(res =>{
      this.mydata=[];
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
            this.mydata.push(element);
          }
        });
      }
    });
  }

  ngOnInit() {
    $(document).ready(function(){
      $(".cartBtn").click(function(){
        $(this).parents(".cardImg").find(".added").css("visibility","visible");
      });
    $(".dropdown-menu button").click(function(){
      console.log($(".dropdown-menu button"));
        $("#myText").eq(0).html($(this).text());
    }); 
    $(".allBtn").click(function(){
        location.reload();
    });  
    $(".cart").on("click",function(){
      $(this).find("i").css("color","#e21c3f");
    })
  });  
  }
}
