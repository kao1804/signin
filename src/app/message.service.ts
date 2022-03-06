import { Injectable } from '@angular/core';
import { Customer } from './customer';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
 private _username :string = '';  


  constructor() { }
  set username(value:any){
   this._username = value;
    
  }
  get username()  {
    return this._username;
  }
  
  
}
