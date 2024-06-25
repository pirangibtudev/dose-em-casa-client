import {
  AuthService,
  EnderecoService,
  ItemEntregaService,
  PacienteService,
  UnidadeService,
  UserService,
} from "./main"
import { PessoaAutorizadaService } from "./services/pessoa-autorizada-service"
import { PrescricaoService } from "./services/prescricao-service"
import { ServiceConstructorProps } from "./services/service"

export { AuthService } from "./services/auth-service"
export { EnderecoService } from "./services/endereco-service"
export { ItemEntregaService } from "./services/item-entrega-service"
export { PacienteService } from "./services/paciente-service"
export { UnidadeService } from "./services/unidade-service"
export { UserService } from "./services/user-service"

export default class DoseEmCasaClient {
  #basePath: string = ""
  get basePath() {
    return this.#basePath
  }
  set basePath(value) {
    this.#basePath = value
    this.#updateParams()
  }
  #authorization: string = ""
  get authorization() {
    return this.#authorization
  }
  set authorization(value) {
    this.#authorization = value
    this.#updateParams()
  }

  authService = new AuthService({})
  enderecoService = new EnderecoService({})
  pacienteService = new PacienteService({})
  unidadeService = new UnidadeService({})
  userService = new UserService({})
  itemEntregaService = new ItemEntregaService({})
  pessoaAutorizadaService = new PessoaAutorizadaService({})
  prescricaoService = new PrescricaoService({})

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
    this.pessoaAutorizadaService = new PessoaAutorizadaService(options)
    this.prescricaoService = new PrescricaoService(options)
  }
}
