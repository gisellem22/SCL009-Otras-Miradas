import { Component, OnInit } from '@angular/core';
import { ProfessionalService } from '../../services/professional.service';
import { PRO } from 'src/app/models/professional';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  professionals: PRO[];

  constructor(public professionalService: ProfessionalService) { }

  ngOnInit() {
    this.professionalService.getProfessionals().subscribe(professionals => {
      console.log(professionals);
      this.professionals = professionals;
    });
  }

  deleteProfessional($event, professional) {
    this.professionalService.deleteProfessional(professional);

  }

}
