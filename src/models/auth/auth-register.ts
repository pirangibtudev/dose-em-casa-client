import { Roles } from "../../enums/roles"

export class AuthRegister {
  Username!: string
  Password!: string
  Cpf!: string
  Role!: Roles
}
