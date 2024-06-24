import { Roles } from "../../enums/roles"
import { Entity } from "../entity"

export class User extends Entity {
  Username!: string
  Password!: string
  Cpf!: string

  Role!: Roles
}
