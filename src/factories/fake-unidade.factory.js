import { faker } from "@faker-js/faker"
import { Unidade } from "../models/unidade/unidade.js"

export class FakeUnidadeFactory {
  static create() {
    const unidade = new Unidade()
    unidade.Nome = faker.company.name()
    unidade.Codigo = faker.number.int({ min: 10000, max: 999999 })

    return unidade
  }
}
