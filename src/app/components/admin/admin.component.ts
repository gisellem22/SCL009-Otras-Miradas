import { Component, OnInit } from '@angular/core';
import { PRO } from 'src/app/models/professional';
import { ProfessionalService } from '../../services/professional.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  professional = {} as PRO;
  // tslint:disable-next-line: no-inferrable-types
  specialty: string = '';

  onChange(event: any) {
    this.specialty = event.target.value;
    console.log(this.specialty);
  }

  constructor(public professionalService: ProfessionalService) {}

  ngOnInit() { }

  addProfessional() {
    this.professionalService.addProfessional(this.professional);
    console.log(this.professional);

  }
}
