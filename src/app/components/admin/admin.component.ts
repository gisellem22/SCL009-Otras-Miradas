import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  specialty:string = "";

  onChange(selected:any):any {
    this.specialty = selected;
    console.log(this.specialty)
  }

  constructor() { }

  ngOnInit() {
  }

}
