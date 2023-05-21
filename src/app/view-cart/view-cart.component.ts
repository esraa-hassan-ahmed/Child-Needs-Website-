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
itemId;
totalPrice:number = 0;

  constructor(
    private q:QueryService ,
    private modalService: NgbModal,
    private data: DataPipeService
  ) { 
    this.newData=[];
  }

getCartItems(){
  if(localStorage.getItem('cart')){
    this.cartStorage = JSON.parse(localStorage.getItem('cart'));
    this.q.getData('assets/shop.json').subscribe(res =>{
      res.forEach(element => {
        if(this.cartStorage.indexOf(element.id)!=-1){
          element.subtotal = element.quantity * JSON.parse(element.price);
          this.totalPrice += element.subtotal;
          this.newData.push(element);
        }
      });
    });
    this.q.getData('assets/toys.json').subscribe(res =>{
      res.forEach(element => {
        if(this.cartStorage.indexOf(element.id)!=-1){
          element.subtotal = element.quantity * JSON.parse(element.price);
          this.totalPrice += element.subtotal;
          this.newData.push(element);
        }
      });     
    })
  }
  else{
    this.newData = [];
  }
}

plus(index){
  var currentItem = this.newData[index]
  currentItem.quantity = currentItem.quantity + 1;
  currentItem.subtotal = currentItem.quantity * currentItem.price;
  this.totalPrice = this.newData.reduce((accumulator, currentValue) => accumulator + currentValue.subtotal, 0);
}
minus(index){
  var currentItem = this.newData[index];
  if(currentItem.quantity > 1){
    currentItem.quantity = currentItem.quantity - 1;
    currentItem.subtotal = currentItem.quantity * this.newData[index].price;
    this.totalPrice = this.newData.reduce((accumulator, currentValue) => accumulator + currentValue.subtotal, 0);
  }
}
delete(itemId){
  for(let i=0;i< this.newData.length;i++){
    if(this.newData[i].id == itemId){
      this.totalPrice -= this.newData[i].subtotal;
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
}
}