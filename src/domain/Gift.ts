import { Patient } from "./Patient";

export class Gift {
  constructor(public name: string) { }
  static getPatient(patient: Patient): Gift[] {
    if (patient.age <= 10) {
      const random = Math.random();
      const gift = random < 0.5 ? new Gift('Balão') : new Gift('Pirulito');
      return [gift];
    }
    return [];
  }
}
