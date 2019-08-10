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
  specialty: PRO[];
  //areas: string[] = ["Broncopulmonar","Cirugía","Fisiatría","Fonoaudiología","Genética Clínica","Infectología","Kinesiología","Neurología","Psicología","Psicopedagogía","Terapia Ocupaciona"]
  areas: string[] = [];

  filterSpecialty() {
    this.professionals.forEach(p => {
      this.areas.push(p.specialty)
    })
    this.uniqueAreas()
  }
  uniqueAreas() {
    this.areas = this.areas.filter((value, index, self) => self.indexOf(value) === index)
    console.log(this.areas)
  }

  constructor(public professionalService: ProfessionalService) { }
  ngOnInit() {
this.professionalService.getProfessionals().subscribe(professionals => {
      this.professionals = professionals;
      console.log(this.professionals);
      this.filterSpecialty();
    });
  }
  deleteProfessional($event, professional) {
    this.professionalService.deleteProfessional(professional);
​
  }
}
