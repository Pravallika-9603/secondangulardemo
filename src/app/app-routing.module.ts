import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { TemplateDrivenComponentComponent } from './template-driven-component/template-driven-component.component';
import { RestaurentComponent } from './restaurent/restaurent.component';

const routes: Routes = [{
  path: 'forgotPassword',
  component:ForgotpasswordComponent
},
{
  path: 'register',
  component:TemplateDrivenComponentComponent
},{
  path:'addRestuarant',
  component:RestaurentComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }