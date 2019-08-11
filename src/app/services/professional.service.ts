import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { PRO } from '../models/professional';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  professionalsCollection: AngularFirestoreCollection<PRO>;
  professionals: Observable<PRO[]>;
  professionalDoc: AngularFirestoreDocument<PRO>;

  constructor(public db: AngularFirestore) {
    // this.professionals = this.db.collection('professionals').valueChanges();
    this.professionalsCollection = this.db.collection('professionals');
    this.professionals = this.professionalsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as PRO;
        data.idFireStore = a.payload.doc.id;
        return data;
      });
    }));
  }
  getProfessionals() {
    return this.professionals;
  }
  addProfessional(professional: PRO) {
    this.professionalsCollection.add(professional);
  }
  deleteProfessional(professional: PRO) {
    this.professionalDoc = this.db.doc(`professionals/${professional.idFireStore}`);
    this.professionalDoc.delete();
  }
  updateProfessional(professional: PRO) {
    this.professionalDoc = this.db.doc(`professionals/${professional.idFireStore}`);
    this.professionalDoc.update(professional);
  }
}
