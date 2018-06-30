import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataPipeService {
  private messageSource = new BehaviorSubject(JSON.parse(localStorage.getItem('cart')).length);
  currentMessage = this.messageSource.asObservable();
  
  changeMessage(message: string) {
    this.messageSource.next(message)
  }

}
