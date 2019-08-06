import { Component, OnInit } from '@angular/core';
import { PRO } from 'src/app/professional';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  professional: PRO;

  specialty:string = "";

  

  onChange(event:any){
    this.specialty = event.target.value;
    console.log(this.specialty)
  }

  onClick(specialist:string, workplace:string, contact:string, insurance:string){
this.professional.specialty = this.specialty;
this.professional.specialist = specialist;
this.professional.workplace = workplace;
this.professional.contact = contact;
this.professional.insurance = insurance;


console.log("json:",this.professional)
}
  constructor() { }

  ngOnInit() {
    this.professional = new PRO("specialty","specialist","workplace","contact","insurance")
  }

}
