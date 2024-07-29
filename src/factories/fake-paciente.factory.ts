import { faker } from "@faker-js/faker"
import { Paciente } from "../models/paciente/paciente"

export class FakePacienteFactory {
  static create() {
    const paciente = new Paciente()
    paciente.CodigoMatricula = faker.number.int({ min: 1000, max: 999999 })
    paciente.Nome = faker.person.fullName()
    paciente.CriterioInclusaoCodigo = faker.number.int({
      min: 1000,
      max: 999999,
    })
    paciente.CriterioInclusao = faker.word.words({ count: { min: 3, max: 10 } })
    paciente.Inativo = faker.datatype.boolean()
    paciente.InativoMotivoCodigo = faker.number.int({
      min: 1000,
      max: 999999,
    })
    paciente.InativoMotivo = faker.word.words({ count: { min: 3, max: 10 } })
    paciente.InativoData = faker.datatype.boolean()
      ? faker.date.between({
          from: new Date(2020),
          to: new Date(),
        })
      : undefined
    paciente.Subgrupo = faker.word.words({ count: { min: 3, max: 10 } })
    paciente.Grupo = faker.word.words({ count: { min: 3, max: 10 } })
    paciente.DataInclusao = faker.date.between({
      from: new Date(2018),
      to: paciente.InativoData || new Date(),
    })

    return paciente
  }
}
