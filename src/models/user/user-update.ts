import { Roles } from "../../enums/roles"

export class UserUpdate {
  Username?: string
  Password?: string
  Matricula?: string
  Role!: Roles
}
