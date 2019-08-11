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

 //para imprimir categorias dinámicas

  // arrayMap (array:any) {
  //   console.log("array: ",array)
  //   let arrayGroup = this.groupBy(array, "specialty");
  //   let resultArray = [];
  //   let keysIterable = Object.keys(arrayGroup);
  
  //   for (let key of keysIterable) {
  //     let obj = {
  //       especialidad: key,
  //       doctores: arrayGroup[key]
  //     };
  //     resultArray.push(obj);
  //   }
  
  //   return resultArray;
  // }
  
  // groupBy (xs, key) {
  //   console.log(xs)
  //   return xs.reduce((rv, x) => {
  //     (rv[x[key]] = rv[x[key]] || []).push(x);
  //     return rv;
  //   }, {});
  // };
  
// para hacer el select

//   onChange(event: any) {
//     this.specialty = event.target.value;
//     this.filterSpecialty(this.specialty)
//     console.log(this.specialty)
//   }

//   filterSpecialty(area:string) {
//   this.area = this.professionals.filter(p => {
// if (p.specialty === area) {
//   return p
// }  })
//     console.log(this.area)
//   }

  // uniqueAreas() {
  //   this.areas = this.areas.filter((value, index, self) => self.indexOf(value) === index)
  //   console.log(this.areas)
  // }

  constructor(public professionalService: ProfessionalService) { }
  ngOnInit() {
this.professionalService.getProfessionals().subscribe(professionals => {
      this.professionals = professionals;
      console.log(this.professionals);
    });
  }

  deleteProfessional($event, professional) {
    this.professionalService.deleteProfessional(professional);
​
  }
}

