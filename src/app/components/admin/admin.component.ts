import { Component, OnInit } from '@angular/core';

import { ProfessionalService } from '../../services/professional.service';
import { PRO } from '../../models/professional';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  professionals: PRO[];
  professional = {} as PRO;
  editingProfessional: PRO;
  specialty: string = ''; 
  editing: boolean = false;

  constructor(public professionalService: ProfessionalService) { }

  ngOnInit() {
    this.professionalService.getProfessionals().subscribe(professionals => {
      this.professionals = professionals;
      console.log(professionals);
    });
  }
  onChange(event: any) {
    this.specialty = event.target.value;
  }
  addProfessional() {
    if (this.professional.specialty !== '' && this.professional.specialist !== '' &&
    this.professional.workplace !== '' && this.professional.reference !== '') {
      this.professionalService.addProfessional(this.professional);
      this.professional = {} as PRO;
    }
  }
  deleteProfessional(event: any, professional: PRO) {
    this.professionalService.deleteProfessional(professional);
  }
  editProfessional(event: any, professional: PRO) {
    this.editingProfessional = professional;
    this.editing = !this.editing;
  }
  updateProfessional() {
    this.professionalService.updateProfessional(this.editingProfessional);
    this.editingProfessional = {} as PRO;
    this.editing = !this.editing;
  }
}
