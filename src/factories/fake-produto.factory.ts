import { faker } from "@faker-js/faker"
import { Produto } from "../models/produto/produto"

export class FakeProdutoFactory {
  static create(rel: { PrescricaoID: number }) {
    const produto = new Produto()
    produto.Codigo = faker.number.int({ min: 10000, max: 999999 })
    produto.Nome = faker.person.fullName()
    produto.Quantidade = faker.number.int({ min: 1, max: 20 })
    produto.Uso = faker.word.words({ count: { min: 2, max: 7 } })
    produto.PrescricaoID = rel.PrescricaoID
    produto.Prescricao

    return produto
  }
}
