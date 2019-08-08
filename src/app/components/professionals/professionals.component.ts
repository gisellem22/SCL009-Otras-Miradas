import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.css']
})
export class ProfessionalsComponent implements OnInit {

  professionals: IProfessional[] = null;

  constructor() { }

  ngOnInit() {
    this.professionals = this.getProfessionals();
  }

  getProfessionals(): IProfessional[] {
    return [{
      firstName: 'Scarlet ',
      lastName: 'Wittin',
      workPlace: ' Integramedica Alto Las Condes',
      securityHealthSystem: 'Fonasa'
    }, {
      firstName: 'Fernando',
      lastName: 'Vuletin',
      workPlace: 'Hospital Uc Marcoleta',
      securityHealthSystem: 'Fonasa'
    }, {
      firstName: 'Orlandina',
      lastName: 'Segovia',
      workPlace: 'Pediatría El Alba',
      securityHealthSystem: 'Isapre'
    }, {
      firstName: 'Linus',
      lastName: 'Holgrem',
      workPlace: 'Clínica Alemana',
      securityHealthSystem: 'Isapre'
    }, {
      firstName: 'Iván',
      lastName: 'Tapia',
      workPlace: 'Clínica Alemana',
      securityHealthSystem: 'Isapre'
    }, {
      firstName: 'Loreto',
      lastName: 'Díaz',
      workPlace: 'Clínica Alemana',
      securityHealthSystem: 'Isapre'
    }];
  }

}

interface IProfessional {
  firstName: string,
  lastName: string,
  workPlace: string,
  securityHealthSystem: string
}
