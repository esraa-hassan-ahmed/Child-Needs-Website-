import { Component, OnInit ,Output} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {QueryService} from '../query.service';
import { DataPipeService } from '../data-pipe.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent implements OnInit {
  itemData;
  deletedItem;
  itemId;
  subtotal:number;
  path:string;

  constructor(
    private q:QueryService,
    private data: DataPipeService,
    private route: ActivatedRoute
  ) 
  { 
    this.itemData={};
    this.getItemDetails();
  }
  getItemDetails(){
    this.route.params.subscribe(param=>{
      this.itemId= param.id;
      if(param.type == "clothes"){
        this.path = "./assets/shop.json"
      }else if(param.type == "toys"){
        this.path = "./assets/toys.json"
      }
      this.getItemData();
    })
  }
  getItemData(): void{
    this.q.getData(this.path).subscribe(
      res => {
        res.forEach(element => {
          if(element.id == this.itemId){
            this.itemData = element;
            this.subtotal = this.itemData.price;
          }
        });;
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

  plus(quantity){
    this.itemData.quantity = parseInt(quantity)+1;
    this.subtotal = this.itemData.quantity * this.itemData.price;
  }
  
  minus(quantity){
    if(quantity > 1){
      this.itemData.quantity = parseInt(quantity)-1;
      this.subtotal = this.itemData.quantity * this.itemData.price;
    }
  }
  

  ngOnInit() {
    $(".dropdown-menu button").click(function(){
        console.log($(".dropdown-menu button"));
        $("#myText").eq(0).html($(this).text());
    }); 
  }
}
