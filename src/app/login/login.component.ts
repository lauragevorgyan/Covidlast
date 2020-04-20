import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {log} from 'util';
import {CovidService} from '../../covid-service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private login: string;
  private password: string;
  constructor(private  router: Router, private covidService: CovidService) { }

  ngOnInit() {
  }

  signIn() {

    if(this.covidService.checkLogin(this.login,this.password) == true){
      this.router.navigate(['input']);
    }else{
      alert("Login or Password incorrect");
      this.router.navigate(['login']);
    }
  }
}
