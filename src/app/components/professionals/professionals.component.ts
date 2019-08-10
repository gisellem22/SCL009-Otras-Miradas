import { Component, OnInit } from '@angular/core';
import { ProfessionalService } from '../../services/professional.service';
import { PRO } from 'src/app/models/professional';
​
@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.css']
})
export class ProfessionalsComponent implements OnInit {
  professionals: PRO[];
  specialty: any;
//   filterSpecialty() {
//     this.specialty = this.professionals.filter(p => {
//     if (p.specialty === "psicología"){
//     p.specialty;
//     }
//   }
// )
// console.log(this.specialty)
//     }
  constructor(public professionalService: ProfessionalService) { }
  ngOnInit() {
this.professionalService.getProfessionals().subscribe(professionals => {
      this.professionals = professionals;
     // this.filterSpecialty();
    });
  }
  deleteProfessional($event, professional) {
    this.professionalService.deleteProfessional(professional);
​
  }
}
