import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MessageService } from '../message.service';
import { CookieService } from 'ngx-cookie-service';
import { FormControl, FormGroup ,  Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() Contact: any;
  @Output() login: EventEmitter<any> = new EventEmitter()

  constructor(private router: Router) { }
  
  Submit(){
    this.login.emit(this.Contact.value)
  };

  ngOnInit(): void {
  } 
  

}
