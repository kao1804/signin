import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { CookieService } from 'ngx-cookie-service';
import {
  FormControl,
  FormGroup,
  MinValidator,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  submit: string = 'Submit';
  emailAdress: string = 'Email Address';
  emailPassword: string = 'Password';
  type: string = 'email';
  password: string = 'password';
  primary: string = 'btn btn-primary';
  contact = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(3),
    ]),
    password: new FormControl('', Validators.required),
  });
  constructor(private messageservice: MessageService, private router: Router) {}

  onSubmit() {
    console.log(this.contact.value);
    // this.messageservice.username = this.contact.controls.email.value;
    this.router.navigate(['welcome'], {
      queryParams: { data: this.contact.controls.email.value },
    });
  }
  checkEmail() {
    if (
      (this.contact.controls.email?.errors?.required ||
        this.contact.controls.email?.invalid) &&
      this.contact.controls.email?.touched
    )
      return true;
    return false;
  }
  checkPassword() {
    if (
      this.contact.controls.password?.errors?.required &&
      this.contact.controls.password?.touched
    )
      return true;
    return false;
  }

  ngOnInit(): void {}
}
