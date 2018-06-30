import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {QueryService} from '../query.service';
import { element } from 'protractor';
import * as $ from 'jquery';
import { DataPipeService } from '../data-pipe.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent implements OnInit {
newData;
deletedItem;
cartStorage;
flag:boolean;
itemId;

  constructor(
    private q:QueryService ,
    private modalService: NgbModal,
    private data: DataPipeService
  ) { 
    this.newData=[];
    this.flag=true;
  }

getCartItems(){
  if(localStorage.getItem('cart')){
    this.cartStorage = JSON.parse(localStorage.getItem('cart'));
    this.q.getData('assets/shop.json').subscribe(res =>{
      res.forEach(element => {
        console.log("data",this.newData);
        console.log(this.cartStorage.indexOf(element.id));
        console.log(this.cartStorage);
        if(this.cartStorage.indexOf(element.id)!=-1){
          element.quantity = 1;
          this.newData.push(element);
          this.flag=false;
        }
      });
      console.log(this.newData);
    });
    if(this.flag==true){
      this.q.getData('assets/toys.json').subscribe(res =>{
        res.forEach(element => {
          if(this.cartStorage.indexOf(element.id)!=-1){
            element.quantity = 1;
            this.newData.push(element);
          }
        });     
        console.log(this.newData);
      })
    }
  }
  else{
    this.newData = [];
  }
}

plus(index,quantity){
  this.newData[index].quantity = parseInt(quantity)+1;
}
minus(index,quantity){
  if(quantity > 1){
    this.newData[index].quantity = parseInt(quantity)-1;
  }
}
delete(itemId){
  for(let i=0;i< this.newData.length;i++){
    if(this.newData[i].id == itemId){
      this.newData.splice(i,1);
      this.deletedItem = JSON.parse(localStorage.getItem('cart'));
      this.deletedItem.splice(i,1);
      localStorage.setItem('cart',JSON.stringify(this.deletedItem));
      break;
    }
  }
  this.newMessage();
}

newMessage() {
  this.data.changeMessage(JSON.parse(localStorage.getItem('cart')).length)
}




ngOnInit() {
  this.getCartItems();
  $(document).ready(function(){ 
  function quen(){

  let h= $(".price");
  console.log("hhh=" + h);
  let n= $(".a");
  let o= $(".itemTotal");

  for(var i=0; i<h.length; i++){
  let zz = h.eq(i).text();
  let yy = n.eq(i).text();
  let tt = parseInt(zz)  * parseInt(yy) ;
  o.eq(i).text(tt);

}

}
quen();

$(".minus").on("click",function(){
  quen();
  sum();
})

$(".plus").on("click",function(){
  quen();
  sum();
})

$(".delete").on("click",function(){
  sum();
})

function sum(){

        let x= $(".total")
        let y=0;
        let arr=[];
        console.log("x=" + x);
        for(var i=0; i<x.length; i++){
        let z = x.eq(i).html();
        // z=parseInt(z);
        arr.push(z)
        }
        let r=0;
        for(var i=0; i<arr.length; i++){
          r+=arr[i];
        }
        $("#totalPrice").text(r);
    
    
      }
      sum();
      
    

});
}
}