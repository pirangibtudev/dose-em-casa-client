import { Entity } from "../entity.js"

export class User extends Entity {
  /** @type {string} */
  Username
  /** @type {string} */
  Password
  /** @type {string} */
  Cpf
  /** @type {typeof import('../../enums/roles.js').Roles[keyof typeof import('../../enums/roles.js').Roles]} */
  Role
}
