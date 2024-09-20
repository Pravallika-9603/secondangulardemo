import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { TemplateDrivenComponentComponent } from './template-driven-component/template-driven-component.component';
import { RestaurentComponent } from './restaurent/restaurent.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { CreateAtmComponent } from './create-atm/create-atm.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { LoansearchComponent } from './loansearch/loansearch.component';

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
},
{
  path:'createAccount',
  component:CreateaccountComponent
},
{
  path:'create-atm',
  component:CreateAtmComponent
},
{
  path:'withdraw',
  component:WithdrawComponent
},{
  path:'searchAccount',
  component:LoansearchComponent
  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }