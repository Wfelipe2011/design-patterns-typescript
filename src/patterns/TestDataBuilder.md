# Test Data Builder

O padrão Test Data Builder é uma proposta por Nat Pryce no livro "Growing Object-Oriented Software, Guided By Tests" e uma variação do padrão Builder do livro "Design Patterns: Elements of Reusable Object-Oriented Software" (GoF), e é usado para criar dados de entrada para testes de forma mais flexível e específica.

## Motivação

Ao escrever testes, muitas vezes precisamos criar objetos com dados específicos para validar determinados cenários. O uso do Test Data Builder nos permite criar objetos de teste apenas com as partes relevantes para o caso de teste em questão, tornando os testes mais expressivos, fáceis de entender e manter.

## Aplicabilidade

O padrão Test Data Builder pode deixar nossos testes mais limpos, compreensíveis e robustos. A regra geral é:
  - Se os dados forem relevantes para a asserção do teste, deixe-os explícitos no builder.
  - Se os dados não forem relevantes para a asserção do teste, deixe-os implícitos no builder.

## Exemplos

```typescript
test('Nao deve dar brinde para pacientes maiores de dez anos', () => {
  const patient = new PatientBuilder().withAge(11).build();
  const gifts = Gift.getPatient(patient);
  expect(gifts).toHaveLength(0);
});

test('Deve criar um paciente com nome Ana, idade 25, status Inativo e CPF 11122233344', () => {
  const patient = new PatientBuilder()
    .withName('Ana')
    .withAge(25)
    .withStatus(Status.Inactive)
    .withCPF(new Cpf('11122233344'))
    .build();

  expect(patient.name).toBe('Ana');
  expect(patient.age).toBe(25);
  expect(patient.status).toBe(Status.Inactive);
  expect(patient.cpf).toBe('11122233344');
});
```

Perceba que no primeiro teste, o dado idade é relevante para a asserção do teste, pois o teste verifica se o paciente recebeu ou não um brinde. Já no segundo teste, o dado idade não é relevante para a asserção do teste, pois o teste verifica apenas se o paciente foi criado com os dados corretos.

## Como implementar

1. Crie uma classe para representar o objeto que você deseja criar.
2. Crie uma classe para representar o builder do objeto.
3. Crie um método build() na classe builder que retorna uma instância do objeto.
4. Crie métodos na classe builder para definir os dados do objeto.

### Exemplo

```typescript
export class Patient {
  constructor(
    public name: string,
    public age: number,
    public status: Status,
    public cpf: string
  ) {}
}

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
```

## Conclusão

O padrão Test Data Builder é uma ótima opção para criar dados de entrada para testes de forma mais flexível e específica. Ele nos permite criar objetos de teste apenas com as partes relevantes para o caso de teste em questão, tornando os testes mais expressivos, fáceis de entender e manter.


