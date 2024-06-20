import { faker } from "@faker-js/faker"
import { User } from "../models/user/user"
import * as cpf from "@fnando/cpf"
import { Roles } from "../enums/roles"

export class FakeUserFactory {
  static create() {
    const user = new User()
    user.Cpf = cpf.generate(false)
    user.Password = faker.string.alphanumeric({ length: 16 })
    user.Username = faker.person.firstName()
    user.Role = Roles.Default

    return user
  }
}
