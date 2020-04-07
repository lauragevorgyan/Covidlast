import { Component, OnInit } from '@angular/core';
import {text} from '../model';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  dataarray = [];
  model = new text();
  constructor() { }

  ngOnInit() {
    this.dataarray.push(this.model)
  }


  addForm() {
    console.log("add")
    this.model = new text()
    this.dataarray.push(this.model)
  }

  onSubmit() {
    console.log(this.dataarray);
  }

  removeForm(index) {
    console.log(index);
    this.dataarray.splice(index,1);
  }
}
