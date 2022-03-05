import { Injectable } from '@angular/core';
import { Customer } from './customer';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
 private username :string = '';  


  constructor() { }
  Message(message:string){
   this.username = message;
    
  }
  reMessage()  {
    return this.username;
  }
  
}
