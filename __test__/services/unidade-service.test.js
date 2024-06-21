import { faker } from "@faker-js/faker"
import { Unidade } from "../../src/models/unidade/unidade"
import { AuthService } from "../../src/main"
import * as cpf from "@fnando/cpf"
import { Roles } from "../../src/enums/roles"
import { UnidadeService } from "../../src/services/unidade-service"
import { FakeUnidadeFactory } from "../../src/factories/fake-unidade.factory"

describe("unidade service testing", () => {
  let token = ""

  beforeAll(async () => {
    const authService = new AuthService({})
    const admin = await authService.login({
      Username: "admin",
      Password: "admin@1234",
    })
    authService.authorization = `Bearer ${admin.data.Token}`
    const newUser = await authService.register({
      Cpf: cpf.generate(false),
      Password: faker.string.alphanumeric(16),
      Role: Roles.Default,
      Username: faker.person.firstName(),
    })

    token = newUser.data.Token
  })

  it("create a new unidade", async () => {
    const unidadeService = new UnidadeService({
      authorization: `Bearer ${token}`,
    })

    const { status } = await unidadeService.create(FakeUnidadeFactory.create())

    expect(status).toBe(201)
  })

  it("create a new unidade and update", async () => {
    const unidadeService = new UnidadeService({
      authorization: `Bearer ${token}`,
    })

    const { data: created } = await unidadeService.create(
      FakeUnidadeFactory.create(),
    )

    const { status } = await unidadeService.update(created.ID, {
      ...created,
      Nome: faker.company.name(),
    })

    expect(status).toBe(200)
  })

  it("create a new unidade and delete", async () => {
    const unidadeService = new UnidadeService({
      authorization: `Bearer ${token}`,
    })

    const { data: created } = await unidadeService.create(
      FakeUnidadeFactory.create(),
    )

    unidadeService.delete(created.ID)
  })

  it("create and read a unidade", async () => {
    const unidadeService = new UnidadeService({
      authorization: `Bearer ${token}`,
    })

    const { data: created } = await unidadeService.create(
      FakeUnidadeFactory.create(),
    )

    const { data: readed } = await unidadeService.getById(created.ID)

    expect(readed.Nome).toBe(created.Nome)
  })

  it("read all unidades", async () => {
    const unidadeService = new UnidadeService({
      authorization: `Bearer ${token}`,
    })

    const { status } = await unidadeService.getAll()

    expect(status).toBe(200)
  })
})
