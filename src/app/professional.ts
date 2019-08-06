export class PRO {
    public idFireStore: string;
    public specialty: string;
    public specialist: string;
    public workplace: string;
    public contact: string;
    public insurance: string
  constructor(specialty: string, specialist: string, workplace: string,contact:string, insurance: string) {
   this.specialty = specialty,
   this.specialist = specialist,
   this.workplace = workplace,
   this.contact = contact,
   this.insurance = insurance
  }
}