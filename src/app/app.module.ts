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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
