import { Roles } from "../../enums/roles"

export class UserUpdate {
  Username?: string
  Password?: string
  Cpf?: string
  Role!: Roles
}
