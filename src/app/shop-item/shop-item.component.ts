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
  backUrl: string;
  deletedItem;
  itemId;

  constructor(
    private q:QueryService,
    private data: DataPipeService,
    private route: ActivatedRoute,
    private router: Router
  ) 
  { 
    this.itemData={};
    this.backUrl = this.q.getUrlHistoryObj();
  }
  
  getItemData(): void{
    let path: string = this.backUrl;
    this.q.getData(path).subscribe(
      res => {
        res.forEach(element => {
          if(element.id == this.itemId){
            this.itemData = element;
          }
        });;

      },
      err => {
        console.log(err);
        console.log('did not receive data');
      }
    );
  }

  getItemData2(): void{
    let path: string = './assets/shop.json';
    this.q.getData(path).subscribe(
      res => {
        res.forEach(element => {
          if(element.id == this.itemId){
            element.quantity = 1;
            this.itemData = element;
          }
        });;

      },
      err => {
        console.log(err);
        console.log('did not receive data');
      }
    );
  }
  getItemData3(): void{
    let path: string = './assets/toys.json';
    this.q.getData(path).subscribe(
      res => {
        res.forEach(element => {
          if(element.id == this.itemId){
            element.quantity = 1;
            this.itemData = element;
          }
        });;

      },
      err => {
        console.log(err);
        console.log('did not receive data');
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
  }
  
  minus(quantity){
    if(quantity > 1){
      this.itemData.quantity = parseInt(quantity)-1;
     
    }
  }
  

  ngOnInit() {
    $(".dropdown-menu button").click(function(){
        console.log($(".dropdown-menu button"));
        $("#myText").eq(0).html($(this).text());
    }); 
    console.log(this.route.params.subscribe(param=>{
      this.itemId= param.id;
      this.getItemData();
      this.getItemData2();
      this.getItemData3();
    }));
      $(document).ready(function(){
        function quen(){
            let h= $("#price").text();
            let n= $("#a").text();
            let o= $("#itemTotal");
            let tt = parseInt(h)  * parseInt(n) ;
            o.text(tt);        
        }
          quen();

          $(".minus").on("click",function(){
            quen();
          })
          
          $(".plus").on("click",function(){
            quen();
          })

      });


  }
}
