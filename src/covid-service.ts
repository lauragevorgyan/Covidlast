import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  uri = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) {
  }

  checkLogin(login: string, password: string){
    const val = {
      login: login,
      password: password
    }
    this.http.post(`${this.uri}/login`, { 'login': login, 'password': password});
    // stex petqa true or false - i pahe lini
    return false;
  }

  addNode(json){
    //console.log(json)
    return this.http.post(`${this.uri}/addNode`,json);
  }

  addCRF(large_info){
    return this.http.post(`${this.uri}/addCrf`,large_info);
  }
}
