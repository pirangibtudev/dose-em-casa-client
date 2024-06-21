export class UserUpdate {
  /** @type {string | undefined} */
  Username
  /** @type {string | undefined} */
  Password
  /** @type {string | undefined} */
  Cpf
  /** @type {typeof import('../../enums/roles.js').Roles[keyof typeof import('../../enums/roles.js').Roles] | undefined} */
  Role
}
