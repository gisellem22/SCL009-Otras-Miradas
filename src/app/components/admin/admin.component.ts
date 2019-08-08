import { Component, OnInit } from '@angular/core';
import { PRO } from 'src/app/models/professional';
import { ProfessionalService } from '../../services/professional.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  professional: PRO;

  // tslint:disable-next-line: no-inferrable-types
  specialty: string = '';

  onChange(event: any) {
    this.specialty = event.target.value;
    console.log(this.specialty);
  }

  addProfessional(specialist: string, workplace: string, contact: string, insurance: string) {
    this.professional.specialty = this.specialty;
    this.professional.specialist = specialist;
    this.professional.workplace = workplace;
    this.professional.contact = contact;
    this.professional.insurance = insurance;

    console.log('json:', this.professional);
    this.professionalService.addProfessional(this.professional);
    this.professional = {} as PRO;
  }
  constructor(public professionalService: ProfessionalService) {}

  ngOnInit() {
    this.professional = new PRO(
      'specialty',
      'specialist',
      'workplace',
      'contact',
      'insurance'
    );
  }
}
