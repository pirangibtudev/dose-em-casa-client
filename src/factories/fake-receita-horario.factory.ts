import { faker } from "@faker-js/faker"
import { ReceitaHorario } from "../models/receita-horario/receita-horario"

export class FakeReceitaHorarioFactory {
  static create(rel: { ReceitaID: number }) {
    const horarios = ["MANHÃ", "TARDE", "NOITE"]

    const horario = new ReceitaHorario()
    horario.ReceitaID = rel.ReceitaID
    horario.Receita
    horario.Horario = horarios[Math.floor(Math.random() * horarios.length)]
    horario.Icone
    horario.Quantidade = faker.number.int({ min: 2, max: 20 })
    horario.Obs

    return horario
  }
}
