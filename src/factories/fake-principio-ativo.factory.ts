import { faker } from "@faker-js/faker"
import { PrincipioAtivo } from "../models/principio-ativo/principio-ativo"

export class FakePrincipioAtivoFactory {
  static create(rel: { PrescricaoID: number }) {
    const principioAtivo = new PrincipioAtivo()
    principioAtivo.Uso = faker.word.words({ count: { min: 1, max: 10 } })
    principioAtivo.Codigo = faker.number.int({ min: 10000, max: 999999 })
    principioAtivo.Nome = faker.word.words({ count: { min: 1, max: 10 } })
    principioAtivo.FormaFarm = faker.word.words({ count: { min: 1, max: 10 } })
    principioAtivo.ViaAdm = faker.word.words({ count: { min: 1, max: 10 } })
    principioAtivo.Essencial = faker.word.words({ count: { min: 1, max: 10 } })
    principioAtivo.Posologia = faker.word.words({ count: { min: 1, max: 10 } })
    principioAtivo.Quantidade = faker.number.int({ min: 2, max: 20 })
    principioAtivo.UnidadeCodigo = faker.number.int({ min: 10000, max: 999999 })
    principioAtivo.Unidade = faker.word.words({ count: { min: 1, max: 10 } })
    principioAtivo.Intervalo = faker.word.words({ count: { min: 1, max: 10 } })
    principioAtivo.Durante = faker.number.int({ min: 2, max: 180 })
    principioAtivo.Condicao = faker.word.words({ count: { min: 1, max: 10 } })
    principioAtivo.PrescricaoID = rel.PrescricaoID
    principioAtivo.Prescricao

    return principioAtivo
  }
}
