import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MessageService } from '../message.service';
import { CookieService } from 'ngx-cookie-service';
import { FormControl, FormControlName, FormGroup ,  Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() contact:any;
  @Input() require : boolean = false;
  @Input() name:any;
  @Input() title:string ="";
  @Input() placeHolder: string = "";
  constructor(private router: Router) { }
  

  ngOnInit(): void {
  } 
  

}
