import { Endereco } from "../models/endereco/endereco.js"
import { EnderecoCreate } from "../models/endereco/endereco-create.js"
import { EnderecoUpdate } from "../models/endereco/endereco-update.js"
import { ServiceResponse } from "../models/service-response.js"
import { Service } from "./service.js"

export class EnderecoService extends Service {
  /** @param {import("./service.js").ServiceConstructorProps} values  */
  constructor(values) {
    super(values)
  }

  /** @returns {Promise<ServiceResponse<Endereco[]>>} */
  async getAll() {
    const res = await this.fetcher({
      method: "GET",
      url: `${this.basePath}/enderecos`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res, [new Endereco()])
  }

  /**
   * @param {number} id
   * @returns {Promise<ServiceResponse<Endereco>>}
   */
  async getById(id) {
    const res = await this.fetcher({
      method: "GET",
      url: `${this.basePath}/enderecos/${id}`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res, new Endereco())
  }

  /**
   * @param {EnderecoCreate} model
   * @returns {Promise<ServiceResponse<Endereco>>}
   */
  async create(model) {
    const res = await this.fetcher({
      method: "POST",
      url: `${this.basePath}/enderecos`,
      headers: { Authorization: this.authorization },
      data: model,
    })

    return ServiceResponse.ParseFetch(res, new Endereco())
  }

  /**
   * @param {number} id
   * @param {EnderecoUpdate} model
   * @returns {Promise<ServiceResponse<Endereco>>}
   */
  async update(id, model) {
    const res = await this.fetcher({
      method: "PUT",
      url: `${this.basePath}/enderecos/${id}`,
      headers: { Authorization: this.authorization },
      data: model,
    })

    return ServiceResponse.ParseFetch(res, new Endereco())
  }

  /**
   * @param {number} id
   * @returns {Promise<ServiceResponse<Endereco>>}
   */
  async delete(id) {
    const res = await this.fetcher({
      method: "DELETE",
      url: `${this.basePath}/enderecos/${id}`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res, new Endereco())
  }
}
