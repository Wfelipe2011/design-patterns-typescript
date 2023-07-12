import { Cpf } from "../domain/Cpf";
import { Patient } from "../domain/Patient";
import { Status } from "../domain/Status";

export class PatientBuilder {
  private name: string = 'John';
  private age: number = 10;
  private status: Status = Status.Active;
  private cpf: string = '12345678900';

  withName(name: string): PatientBuilder {
    this.name = name;
    return this;
  }

  withAge(age: number): PatientBuilder {
    this.age = age;
    return this;
  }

  withStatus(status: Status): PatientBuilder {
    this.status = status;
    return this;
  }

  withCPF(cpf: Cpf): PatientBuilder {
    this.cpf = cpf.value;
    return this;
  }

  build(): Patient {
    return new Patient(this.name, this.age, this.status, this.cpf);
  }
}
