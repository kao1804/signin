import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { CookieService } from 'ngx-cookie-service';
import { FormControl, FormGroup ,  Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  
  contact = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('',Validators.required),
  });
  constructor(private messageservice : MessageService,private router: Router) {
   }
 

  onSubmit(){
    console.log(this.contact.value);
    // this.messageservice.username = this.contact.controls.email.value;
    this.router.navigate(['welcome'],{queryParams:{data: this.contact.controls.email.value}});
  }

  ngOnInit(): void { }

}
