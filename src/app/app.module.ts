import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InputComponent } from './input/input.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BigFormComponent } from './big-form/big-form.component';
import { LargeInfoComponent } from './large-info/large-info.component';
import { FileUploadModule } from 'ng2-file-upload';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CovidService} from '../covid-service';

@NgModule({
  declarations: [
    routingComponents,
    AppComponent,
    LoginComponent,
    InputComponent,
    FirstpageComponent,
    BigFormComponent,
    LargeInfoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    HttpClientModule,
  ],
  providers: [CovidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
