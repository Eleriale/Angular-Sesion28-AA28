import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanactivateGuard } from './canactivate.guard';
import { HomeComponent } from './principal/home/home.component';
import { LoginComponent } from './principal/login/login.component';

const routes: Routes = [

  {path: '', component: LoginComponent }, 
  { path: 'login', component: LoginComponent },

  {path: 'home', component: HomeComponent, canActivate : [CanactivateGuard] }, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
