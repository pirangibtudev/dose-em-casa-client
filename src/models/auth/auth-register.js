import { Roles } from "../../enums/roles.js"

export class AuthRegister {
  /** @type {string} */
  Username
  /** @type {string} */
  Password
  /** @type {string} */
  Cpf
  /** @type {typeof Roles[keyof typeof Roles]} */
  Role
}
