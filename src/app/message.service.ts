import { Injectable } from '@angular/core';
import { Customer } from './customer';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
 username :string = '';  


  constructor() { }
  setMessage(message:string){
   this.username = message
    
  }
  getMessage()  {
    return this.username
    
  }
  
}
