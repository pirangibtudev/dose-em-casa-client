import { FakeUnidadeFactory } from "../../src/factories/fake-unidade.factory"
import { FakeUserFactory } from "../../src/factories/fake-user.factory"
import DoseEmCasaClient from "../../src/main"

describe("update log service", () => {
  const client = new DoseEmCasaClient({})

  beforeAll(async () => {
    const { data: admin } = await client.authService.login({
      Username: "admin",
      Password: "admin@1234",
    })
    client.authorization = `Bearer ${admin.Token}`

    const { data: usr } = await client.authService.register(
      FakeUserFactory.create(),
    )
    client.authorization = `Bearer ${usr.Token}`
  })

  it("register & update a unidade & get full log", async () => {
    const { data: createdUnidade } = await client.unidadeService.create(
      FakeUnidadeFactory.create(),
    )

    for await (const _ of Array(7).fill(0)) {
      await client.unidadeService.update(createdUnidade.ID, {
        Codigo: FakeUnidadeFactory.create().Codigo,
        Nome: FakeUnidadeFactory.create().Nome,
      })
    }

    const { data } = await client.updateLogService.getByIdAndTableName(
      createdUnidade.ID,
      "unidades",
    )

    console.log(data)
    console.log(data.length)

    expect(data.length).toBe(8)
  })
})
