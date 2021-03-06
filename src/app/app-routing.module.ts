import {NgModel} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {InputComponent} from './input/input.component';
import {FirstpageComponent} from './firstpage/firstpage.component';
import {BigFormComponent} from './big-form/big-form.component';
import {LargeInfoComponent} from './large-info/large-info.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'input', component: InputComponent},
  {path: 'main', component: FirstpageComponent},
  {path: 'form', component: BigFormComponent},
  {path: 'info', component: LargeInfoComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [AppComponent, LoginComponent, InputComponent, BigFormComponent, LargeInfoComponent];
