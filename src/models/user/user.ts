import { Roles } from "../../enums/roles"
import { Entity } from "../entity"

export class User extends Entity {
  Username!: string
  Password!: string
  Matricula!: string

  Role!: Roles
}
