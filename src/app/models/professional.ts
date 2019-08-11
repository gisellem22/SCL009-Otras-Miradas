export class PRO {
  public idFireStore?: string;
  public specialty?: string;
  public specialist?: string;
  public workplace?: string;
  public contact?: string;
  public insurance?: string;
  public reference?: string;

  constructor(idFireStore, specialty, specialist, workplace, contact, insurance, reference) {
    this.idFireStore = idFireStore,
    this.specialty = specialty,
    this.specialist = specialist,
    this.workplace = workplace,
    this.contact = contact,
    this.insurance = insurance,
    this.reference = reference;
  }
}
