import { faker } from "@faker-js/faker"
import { FakeUserFactory } from "../../src/factories/fake-user.factory"
import { AuthService } from "../../src/main"
import { EnderecoService } from "../../src/services/endereco-service"
import { FakeEnderecoFactory } from "../../src/factories/fake-endereco.factory"

describe("endereco service test", () => {
  /** @type {EnderecoService | undefined} */
  let enderecoService

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

    console.log(created.ID)

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
})
