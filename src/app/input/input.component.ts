import { Component, OnInit } from '@angular/core';
import {text} from '../model';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Router} from '@angular/router';
import {CovidService} from '../../covid-service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  dataarray = [];
  model = new text();
  private  patient_name: string;
  private  infection: string;
  private  sex: string;
  fileToUpload: File = null;
  constructor(private covidService: CovidService, private router: Router) {

  }
  ngOnInit() {
    this.dataarray.push(this.model)
  }


  addForm() {
    console.log("add")
    this.model = new text()
    this.dataarray.push(this.model)
  }

  removeForm(index) {
    console.log(index);
    this.dataarray.splice(index,1);
  }

  // for file upload to server

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }


  addNode() {
    let data =
    {
      patientName : this.patient_name,
      infection_source: this.infection,
      sex: this.sex
    }
    this.covidService.addNode(JSON.stringify(data));
  }

  addFile() {
    // file - mase petqa haskananq ur enq upload anelu
  }

  viewNodeS() {
    this.router.navigateByUrl('main');
  }
}
