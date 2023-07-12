
export class Cpf {
  constructor(public value: string) {
    if (!this.validate(value)) throw new Error('Invalid CPF');
  }

  private validate(cpf: string): boolean {
    // logic to validate CPF
    return true;
  }
}
