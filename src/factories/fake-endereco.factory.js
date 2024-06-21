import { faker } from "@faker-js/faker"
import { Endereco } from "../models/endereco/endereco.js"

export class FakeEnderecoFactory {
  static create() {
    const endereco = new Endereco()
    endereco.MunicipioCodigo = faker.number.int({ min: 10000, max: 999999 })
    endereco.Municipio = faker.location.city()
    endereco.LogradouroTipo = "RUA"
    endereco.LogradouroCodigo = faker.number.int({ min: 10000, max: 999999 })
    endereco.Logradouro = faker.location.street()
    endereco.BairroCodigo = faker.number.int({ min: 10000, max: 999999 })
    endereco.Bairro = faker.location.county()
    endereco.Numero = faker.number.int({ min: 1, max: 999 })
    endereco.Complemento = faker.location.secondaryAddress()
    endereco.Cep = +faker.location.zipCode("########")
    endereco.TipoTelefone = "CELULAR"
    endereco.Telefone =
      "" + faker.number.int({ min: 10000000000, max: 99999999999 })

    return endereco
  }
}
