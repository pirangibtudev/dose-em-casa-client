import {
  AuthService,
  EnderecoService,
  ItemEntregaService,
  PacienteService,
  UnidadeService,
  UserService,
} from "./main"
import { ServiceConstructorProps } from "./services/service"

export { AuthService } from "./services/auth-service"
export { EnderecoService } from "./services/endereco-service"
export { ItemEntregaService } from "./services/item-entrega-service"
export { PacienteService } from "./services/paciente-service"
export { UnidadeService } from "./services/unidade-service"
export { UserService } from "./services/user-service"

export default class DoseEmCasaClient {
  _basePath: string = ""
  get basePath() {
    return this._basePath
  }
  set basePath(value) {
    this._basePath = value
    this.#updateParams()
  }
  _authorization: string = ""
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

  constructor(options: ServiceConstructorProps) {
    this.basePath = options.basePath || this.basePath
    this.authorization = options.authorization || this.authorization

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
