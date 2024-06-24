import {
  AuthService,
  EnderecoService,
  ItemEntregaService,
  PacienteService,
  UnidadeService,
  UserService,
} from "./main.js"

export { AuthService } from "./services/auth-service.js"
export { EnderecoService } from "./services/endereco-service.js"
export { ItemEntregaService } from "./services/item-entrega-service.js"
export { PacienteService } from "./services/paciente-service.js"
export { UnidadeService } from "./services/unidade-service.js"
export { UserService } from "./services/user-service.js"

export default class DoseEmCasaClient {
  /** @type {string} */
  _basePath
  get basePath() {
    return this._basePath
  }
  set basePath(value) {
    this._basePath = value
    this.#updateParams()
  }
  /** @type {string} */
  _authorization
  get authorization() {
    return this._authorization
  }
  set authorization(value) {
    this._authorization = value
    this.#updateParams()
  }

  authService = new AuthService({})
  enderecoService = new EnderecoService({})
  pacienteService = new PacienteService({})
  unidadeService = new UnidadeService({})
  userService = new UserService({})
  itemEntregaService = new ItemEntregaService({})

  /** @param {import("./services/service.js").ServiceConstructorProps} options  */
  constructor(options) {
    this.basePath = options.basePath
    this.authorization = options.authorization

    this.#updateParams()
  }

  #updateParams() {
    const options = {
      basePath: this.basePath,
      authorization: this.authorization,
    }

    this.authService = new AuthService(options)
    this.enderecoService = new EnderecoService(options)
    this.pacienteService = new PacienteService(options)
    this.unidadeService = new UnidadeService(options)
    this.userService = new UserService(options)
    this.itemEntregaService = new ItemEntregaService(options)
  }
}
