import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sec3',
  templateUrl: './sec3.component.html',
  styleUrls: ['./sec3.component.scss']
})
export class Sec3Component implements OnInit {

  constructor(
    private router: Router  
  ) { }

  redirectTo(): void {
    this.router.navigate(['/shop/']);
  }
  redirectToToys(): void {
    this.router.navigate(['/toys/']);
  }

  ngOnInit() {

  }

}
