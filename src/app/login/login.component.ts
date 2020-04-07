import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {log} from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private login: string;
  private password: string;
  constructor(private  router: Router) { }

  ngOnInit() {
  }

  signIn() {
    if(this.login.match('admin') && this.password.match('admin')){
      this.router.navigate(['input']);
    }else{
      this.router.navigate(['login']);
    }
  }
}
