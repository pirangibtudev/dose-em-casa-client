import { faker } from "@faker-js/faker"
import { AuthService } from "../../src/main"
import { UserService } from "../../src/services/user-service"
import * as cpf from "@fnando/cpf"
import { Roles } from "../../src/enums/roles"
import { FakeUserFactory } from "../../src/factories/fake-user.factory"

describe("user service testing", () => {
  const fakeUser = FakeUserFactory.create()
  const updateName = faker.person.firstName()
  const updatePass = faker.string.alphanumeric(16)

  it("create a new user", async () => {
    const authService = new AuthService({})

    const { data } = await authService.login({
      Username: "admin",
      Password: "admin@1234",
    })

    authService.authorization = `Bearer ${data.Token}`

    const { status } = await authService.register(fakeUser)

    expect(status).toBe(201)
  })

  it("updates the created user", async () => {
    const authService = new AuthService({})
    const userService = new UserService({})

    const { data } = await authService.login(fakeUser)

    userService.authorization = `Bearer ${data.Token}`

    const { status } = await userService.update({
      ...fakeUser,
      Username: updateName,
      Password: updatePass,
    })

    expect(status).toBe(200)
  })

  it("login successfully with updated user", async () => {
    const authService = new AuthService({})

    const { status } = await authService.login({
      Username: updateName,
      Password: updatePass,
    })

    expect(status).toBe(200)
  })
})
