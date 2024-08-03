import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ForgotpassordComponent } from './forgotpassord/forgotpassord.component';
import path from 'path';
import { TemplateDrivenComponentComponent } from './template-driven-component/template-driven-component.component';

const routes: Routes = [
{
  path:'forgotpassord',
  component:ForgotpassordComponent

  
  
},
{
  path:'register',
  component:AppComponent
},
{
  path:'login',
  component:TemplateDrivenComponentComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
