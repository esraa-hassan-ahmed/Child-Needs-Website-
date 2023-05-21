import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataPipeService {
  private messageSource = new BehaviorSubject<number>(0);
  currentMessage = this.messageSource.asObservable();

  constructor() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      this.messageSource.next(cart.length);
    }
  }
  
  changeMessage(message: number) {
    this.messageSource.next(message)
  }

}
