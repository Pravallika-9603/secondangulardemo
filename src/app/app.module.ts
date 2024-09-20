import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenComponentComponent } from './template-driven-component/template-driven-component.component';
import { FormsModule } from '@angular/forms';
import { HttpClient,provideHttpClient,withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { MaskDirective } from './mask.directive';
import { AddressComponent } from './address/address.component';
import { UserComponent } from './user/user.component';
import { RestaurentComponent } from './restaurent/restaurent.component';
import { RatingComponent } from './rating/rating.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { CreateAtmComponent } from './create-atm/create-atm.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { LoansearchComponent } from './loansearch/loansearch.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
@NgModule({ 
  declarations: [
    AppComponent,
    TemplateDrivenComponentComponent,
    ForgotpasswordComponent,
    MaskDirective,
    AddressComponent,
    UserComponent,
    RestaurentComponent,
    RatingComponent,
    ForgotpasswordComponent,
    CreateaccountComponent,
    CreateAtmComponent,
    WithdrawComponent,
    LoansearchComponent,
  ],
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
