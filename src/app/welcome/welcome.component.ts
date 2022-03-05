import { Component, OnInit,Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  

  constructor(private messageservice: MessageService,private cookie:CookieService, private route: Router) {
    
   }
  username :string = this.messageservice.reMessage();

  onBack(){
    this.route.navigate(['signin']);
  }

  ngOnInit(): void {
  };

}
