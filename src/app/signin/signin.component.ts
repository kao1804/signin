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

  constructor(private messageservice : MessageService, private cookie: CookieService,private router: Router) {
   }
   email:  FormControl = new FormControl('',Validators.required);
   password: FormControl = new FormControl('');
  ngOnInit(): void { }
  onClick(){
    this.messageservice.setMessage(this.email.value);
    this.router.navigate(['welcome']);
    throw Error("something is wrong");
    
  }
   



  // onSubmit(form: any){
  //   // console.warn(this.contact.value);
  //   this.messageservice.setMessage(this.email.value);
  //   // this.messageservice.setMessage(this.contact.get('email').value);
  //   throw Error("something is wrong")
   
  // }

}
