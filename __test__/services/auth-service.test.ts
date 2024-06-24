import { AuthService } from "../../src/main"
import { faker } from "@faker-js/faker"
import * as cpf from "@fnando/cpf"
import { Roles } from "../../src/enums/roles"

describe("auth service testing", () => {
  const fakeUser = {
    Username: faker.person.firstName(),
    Password: faker.string.alphanumeric({ length: 16 }),
    Cpf: cpf.generate(false),
    Role: Roles.Default,
  }

  it("can't login", async () => {
    const service = new AuthService({})
    const { status } = await service.login(fakeUser)

    expect(status).toBe(401)
  })

  it("can't create a new user", async () => {
    const service = new AuthService({})
    const { status } = await service.register(fakeUser)

    expect(status).toBe(401)
  })

  it("login as admin and create a new user", async () => {
    const service = new AuthService({})

    const loginRes = await service.login({
      Username: "admin",
      Password: "admin@1234",
    })

    service.authorization = `Bearer ${loginRes.data.Token}`

    const registered = await service.register(fakeUser)

    expect(registered.status).toBe(201)
  })

  it("login successfully", async () => {
    const service = new AuthService({})
    const { status } = await service.login(fakeUser)

    expect(status).toBe(200)
  })
})
