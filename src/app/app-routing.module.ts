import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGaurdService } from './Service/auth-gaurd.service';
import { ChatbotComponent } from './chatbot/chatbot.component';

const routes: Routes = [
  { path:'signup', component:SignupComponent},
  { path:'login', component:LoginComponent},
  { path:'', component:HomeComponent},
  { path:'dashboard', component:DashboardComponent, canActivate:[AuthGaurdService]},
  { path:'chat', component:ChatbotComponent, canActivate:[AuthGaurdService]}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
