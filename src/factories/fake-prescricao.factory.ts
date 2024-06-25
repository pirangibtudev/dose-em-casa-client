import { faker } from "@faker-js/faker"
import { Prescricao } from "../models/prescricao/prescricao"

export class FakePrescricaoFactory {
  static create(rel: { pacienteId: number; unidadeId: number }) {
    const prescricao = new Prescricao()
    prescricao.PacienteID = rel.pacienteId
    prescricao.Atendimento = faker.word.words({ count: { min: 3, max: 8 } })
    prescricao.Codigo = "" + faker.number.int({ min: 10000, max: 999999 })
    prescricao.ReceitaControlada = faker.word.adjective()
    prescricao.Data = faker.date.between({
      from: new Date(2022),
      to: new Date(),
    })
    prescricao.UnidadeID = rel.unidadeId
    prescricao.ProfissionalCodigo = faker.number.int({
      min: 10000,
      max: 999999,
    })
    prescricao.Profissional = faker.person.fullName()
    prescricao.ProfissionalCboCodigo = faker.number.int({
      min: 10000,
      max: 999999,
    })
    prescricao.ProfissionalCbo = faker.word.words({ count: { min: 3, max: 7 } })
    prescricao.PrincipioAtivos
    prescricao.Produtos

    return prescricao
  }
}
