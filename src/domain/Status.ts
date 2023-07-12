export class Status {
  static Active = new Status('Ativo');
  static Inactive = new Status('Inativo');
  constructor(public value: string) { }
}
