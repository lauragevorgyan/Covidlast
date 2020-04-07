import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InputComponent } from './input/input.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    routingComponents,
    AppComponent,
    LoginComponent,
    InputComponent,
    FirstpageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
