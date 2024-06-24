import { Service } from "./services/service.js"

export { AuthService } from "./services/auth-service.js"
export { EnderecoService } from "./services/endereco-service.js"
export { PacienteService } from "./services/paciente-service.js"
export { UnidadeService } from "./services/unidade-service.js"
export { UserService } from "./services/user-service.js"
export { ItemEntregaService } from "./services/item-entrega-service.js"

export default class DoseEmCasaClient {
  basePath
  authorization

  /** @param {import("./services/service.js").ServiceConstructorProps} options  */
  constructor(options) {
    this.basePath = options.basePath
    this.authorization = options.authorization
  }

  /** @param {typeof Service} service  */
  get(service) {
    return new service({
      authorization: this.authorization,
      basePath: this.basePath,
    })
  }
}
