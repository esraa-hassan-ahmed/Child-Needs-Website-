import { Component, OnInit } from '@angular/core';
import { NgForm , NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  user_name: string = "";
  user_email: any = "";
  user_message: string = "";

  contactUs(contactData:NgForm): void{
    contactData.reset();
  }

  ngOnInit() {
  }

}
