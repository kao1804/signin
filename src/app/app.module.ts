import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { CookieService } from 'ngx-cookie-service';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    WelcomeComponent,
    InputComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
