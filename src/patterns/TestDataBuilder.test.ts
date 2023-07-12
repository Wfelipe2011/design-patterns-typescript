import { Gift } from '../domain/Gift'
import { PatientBuilder } from '../builder/PatientBuilder'
import { Status } from 'src/domain/Status'
import { Cpf } from 'src/domain/Cpf'

describe('Test Data Builder', () => {
  test('Nao deve dar brinde para pacientes maiores de dez anos', () => {
    const patient = new PatientBuilder().withAge(11).build()
    const gifts = Gift.getPatient(patient)
    expect(gifts).toHaveLength(0)
  })

  test('Deve dar um balao ou um Pirulito para pacientes menores de dez anos', () => {
    const patient = new PatientBuilder().withAge(10).build()
    const [gifts] = Gift.getPatient(patient)
    expect(gifts.name).toMatch(/Balão|Pirulito/)
  })

  test('Deve criar um paciente com nome Ana, idade 25, status Inativo e CPF 11122233344', () => {
    const patient = new PatientBuilder().withName('Ana').withAge(25).withStatus(Status.Inactive).withCPF(new Cpf('11122233344')).build()

    expect(patient.name).toBe('Ana')
    expect(patient.age).toBe(25)
    expect(patient.status).toBe(Status.Inactive)
    expect(patient.cpf).toBe('11122233344')
  })

  test('Deve criar um paciente default', () => {
    const patient = new PatientBuilder().build()

    expect(patient.name).toBe('John')
    expect(patient.age).toBe(10)
    expect(patient.status).toBe(Status.Active)
    expect(patient.cpf).toBe('12345678900')
  })
})
