import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import { DividerModule } from "primeng/divider";
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AuthorizationPageComponent } from './authorization-page/authorization-page.component';
import {DialogModule} from "primeng/dialog";
import {ToolbarModule} from "primeng/toolbar";

import { ConfirmationService, MessageService } from "primeng/api";
import { ChangePasswordComponent } from './change-password/change-password.component';
import {ConfirmPopupModule} from "primeng/confirmpopup";
import {ToastModule} from "primeng/toast";

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationPageComponent,
    ChangePasswordComponent
  ],
  imports: [
    AccordionModule,
    BrowserModule,
    ButtonModule,
    BrowserAnimationsModule,
    DividerModule,
    FormsModule,
    InputTextModule,
    HttpClientModule,
    PasswordModule,
    DialogModule,
    ReactiveFormsModule,
    ToolbarModule,
    ConfirmPopupModule,
    ToastModule
  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
