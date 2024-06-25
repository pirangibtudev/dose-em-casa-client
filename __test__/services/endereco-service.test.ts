import { faker } from "@faker-js/faker"
import { FakeUserFactory } from "../../src/factories/fake-user.factory"
import DoseEmCasaClient, { AuthService } from "../../src/main"
import { EnderecoService } from "../../src/services/endereco-service"
import { FakeEnderecoFactory } from "../../src/factories/fake-endereco.factory"
import { Endereco } from "../../src/models/endereco/endereco"

describe("endereco service test", () => {
  let enderecoService!: EnderecoService

  beforeAll(async () => {
    const authService = new AuthService({})
    const admin = await authService.login({
      Username: "admin",
      Password: "admin@1234",
    })
    authService.authorization = `Bearer ${admin.data.Token}`
    const newUser = await authService.register(FakeUserFactory.create())

    enderecoService = new EnderecoService({
      authorization: `Bearer ${newUser.data.Token}`,
    })
  })

  it("create a new endereco", async () => {
    const { status } = await enderecoService.create(
      FakeEnderecoFactory.create(),
    )

    expect(status).toBe(201)
  })

  it("create a new endereco and update", async () => {
    const { data: created } = await enderecoService.create(
      FakeEnderecoFactory.create(),
    )

    const { status, errorMessage } = await enderecoService.update(created.ID, {
      ...created,
      Telefone: "" + faker.number.int({ min: 10000000000, max: 99999999999 }),
    })

    expect(status).toBe(200)
  })

  it("create a new endereco and delete", async () => {
    const { data: created } = await enderecoService.create(
      FakeEnderecoFactory.create(),
    )

    enderecoService.delete(created.ID)
  })

  it("create and read a endereco", async () => {
    const { data: created } = await enderecoService.create(
      FakeEnderecoFactory.create(),
    )

    const { data: readed } = await enderecoService.getById(created.ID)

    expect(readed.Cep).toBe(created.Cep)
  })

  it("read all enderecos", async () => {
    const { status } = await enderecoService.getAll()

    expect(status).toBe(200)
  })

  it("search a endereco", async () => {
    const dose = new DoseEmCasaClient({})
    const {
      data: { Token },
    } = await dose.authService.login({
      Username: "admin",
      Password: "admin@1234",
    })
    dose.authorization = `Bearer ${Token}`
    const usr = await dose.authService.register(FakeUserFactory.create())
    dose.authorization = `Bearer ${usr.data.Token}`

    const { data: end } = await dose.enderecoService.create(
      FakeEnderecoFactory.create(),
    )

    const {
      data: [first],
    } = await dose.enderecoService.getAll({
      fieldSearch: JSON.stringify({
        Bairro: end.Bairro,
        Numero: end.Numero.toString(),
        Logradouro: end.Logradouro,
      } satisfies Partial<{ [x in keyof Endereco]: string }>),
    })

    expect(first).toEqual(end)
  })
})
