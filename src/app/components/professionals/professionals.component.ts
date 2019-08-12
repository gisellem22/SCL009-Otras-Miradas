import { Component, OnInit, OnChanges } from '@angular/core';
import { ProfessionalService } from '../../services/professional.service';
import { PRO } from 'src/app/models/professional';


@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.css']
})
export class ProfessionalsComponent implements OnInit {
  professionals: PRO[];
  area:any;
  specialty: string = '';
  areas:any = [];

  arrayMap (array:any) {
    console.log("array: ",array)
    let arrayGroup = this.groupBy(array, "specialty");
    let resultArray = [];
    let keysIterable = Object.keys(arrayGroup);
  
    for (let key of keysIterable) {
      let obj = {
        especialidad: key,
        doctores: arrayGroup[key]
      };
      resultArray.push(obj);
    }
  
    return resultArray;
  }
  
  groupBy (xs, key) {
    console.log(xs)
    return xs.reduce((rv, x) => {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  constructor(public professionalService: ProfessionalService) { }
  ngOnInit() {
this.professionalService.getProfessionals().subscribe(professionals => {
      this.professionals = professionals;
      this.areas = this.arrayMap(this.professionals)
      console.log(this.professionals);
      console.log("areas", this.areas)
    });

  }

  deleteProfessional($event, professional) {
    this.professionalService.deleteProfessional(professional);
​
  }
}

