import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from '../signin/signin.component';
import { WelcomeComponent } from '../welcome/welcome.component';
const routes: Routes = [
  {path:'', redirectTo:'signin',pathMatch: 'full'},
  {path:'signin',component: SigninComponent},
  {path:'welcome',component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
