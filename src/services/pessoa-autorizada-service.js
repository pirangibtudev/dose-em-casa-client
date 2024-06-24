import { PessoaAutorizada } from "../models/pessoa-autorizada/pessoa-autorizada.js"
import { PessoaAutorizadaCreate } from "../models/pessoa-autorizada/pessoa-autorizada-create.js"
import { PessoaAutorizadaUpdate } from "../models/pessoa-autorizada/pessoa-autorizada-update.js"
import { ServiceResponse } from "../models/service-response.js"
import { Service } from "./service.js"

export class PessoaAutorizadaService extends Service {
  /** @param {import("./service.js").ServiceConstructorProps} values  */
  constructor(values) {
    super(values)
  }

  async getAll() {
    const res = await this.fetcher({
      method: "GET",
      url: `${this.basePath}/pessoa_autorizadas`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res, [new PessoaAutorizada()])
  }

  /** @param {number} id  */
  async getById(id) {
    const res = await this.fetcher({
      method: "GET",
      url: `${this.basePath}/pessoa_autorizadas/${id}`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res, new PessoaAutorizada())
  }

  /** @param {PessoaAutorizadaCreate} model  */
  async create(model) {
    const res = await this.fetcher({
      method: "POST",
      url: `${this.basePath}/pessoa_autorizadas`,
      headers: { Authorization: this.authorization },
      data: model,
    })

    return ServiceResponse.ParseFetch(res, new PessoaAutorizada())
  }

  /**
   * @param {number} id
   * @param {PessoaAutorizadaUpdate} model
   */
  async update(id, model) {
    const res = await this.fetcher({
      method: "PUT",
      url: `${this.basePath}/pessoa_autorizadas/${id}`,
      headers: { Authorization: this.authorization },
      data: model,
    })

    return ServiceResponse.ParseFetch(res, new PessoaAutorizada())
  }

  /** @param {number} id  */
  async delete(id) {
    const res = await this.fetcher({
      method: "DELETE",
      url: `${this.basePath}/pessoa_autorizadas/${id}`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res, new PessoaAutorizada())
  }
}
