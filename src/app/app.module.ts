import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenComponentComponent } from './template-driven-component/template-driven-component.component';
import { FormsModule } from '@angular/forms';
import { HttpClient,provideHttpClient,withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { ForgotpassordComponent } from './forgotpassord/forgotpassord.component';
@NgModule({ 
  declarations: [
    AppComponent,
    TemplateDrivenComponentComponent,
    ForgotpassordComponent,
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
