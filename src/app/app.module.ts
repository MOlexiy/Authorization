import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import { DividerModule } from "primeng/divider";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthorizationPageComponent } from './authorization-page/authorization-page.component';
import { LogginSuccessComponent } from './loggin-success/loggin-success.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthorizationPageComponent,
    LogginSuccessComponent
  ],
  imports: [
    AccordionModule,
    BrowserModule,
    ButtonModule,
    DividerModule,
    FormsModule,
    InputTextModule,
    HttpClientModule,
    PasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
