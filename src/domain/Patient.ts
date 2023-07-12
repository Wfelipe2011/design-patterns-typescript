import { Status } from "./Status";

export class Patient {
  constructor(
    public name: string,
    public age: number,
    public status: Status,
    public cpf: string,
  ) { }
}
