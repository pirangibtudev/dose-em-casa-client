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
  authorization

  authService = new AuthService({ ...this })
  enderecoService = new EnderecoService({ ...this })
  pacienteService = new PacienteService({ ...this })
  unidadeService = new UnidadeService({ ...this })
  userService = new UserService({ ...this })
  itemEntregaService = new ItemEntregaService({ ...this })

  /** @param {import("./services/service.js").ServiceConstructorProps} options  */
  constructor(options) {
    this.basePath = options.basePath
    this.authorization = options.authorization

    this.#updateParams()
  }

  #updateParams() {
    this.authService = new AuthService({ ...this })
    this.enderecoService = new EnderecoService({ ...this })
    this.pacienteService = new PacienteService({ ...this })
    this.unidadeService = new UnidadeService({ ...this })
    this.userService = new UserService({ ...this })
    this.itemEntregaService = new ItemEntregaService({ ...this })
  }
}
