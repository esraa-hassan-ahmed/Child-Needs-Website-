import { Component, OnInit } from '@angular/core';
import { NgForm , NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  

  contactUs(contactData:NgForm): void{
    console.log(contactData);
    contactData.reset();

  }

  ngOnInit() {
  }

}
