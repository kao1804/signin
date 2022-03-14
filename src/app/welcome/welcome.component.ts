import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  username: any;

  constructor(
    private messageservice: MessageService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params: any) => {
      console.log(params);
      this.username = params.data;
    });
  }

  onBack() {
    this.router.navigate(['signin']);
  }

  ngOnInit(): void {}
}
