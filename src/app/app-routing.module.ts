import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ForgotpassordComponent } from './forgotpassord/forgotpassord.component';
import { TemplateDrivenComponentComponent } from './template-driven-component/template-driven-component.component';
import { RestaurentComponent } from './restaurent/restaurent.component';

const routes: Routes = [
  {
    path:'forget',
    component:ForgotpassordComponent
  },
  {
    path:'register',
    component:AppComponent
  },
  {
    path:'login',
    component:TemplateDrivenComponentComponent
  },
  
{
  path:'addRestaurent',
  component:RestaurentComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
