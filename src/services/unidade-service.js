import { ServiceResponse } from "../models/service-response.js"
import { Unidade } from "../models/unidade/unidade.js"
import { UnidadeCreate } from "../models/unidade/unidade-create.js"
import { UnidadeUpdate } from "../models/unidade/unidade-update.js"
import { Service } from "./service.js"

export class UnidadeService extends Service {
  /** @param {import("./service.js").ServiceConstructorProps} values  */
  constructor(values) {
    super(values)
  }

  /** @returns {Promise<ServiceResponse<Unidade[]>>} */
  async getAll() {
    const res = await this.fetcher({
      method: "GET",
      url: `${this.basePath}/unidades`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res, [new Unidade()])
  }

  /**
   * @param {number} id
   * @returns {Promise<ServiceResponse<Unidade>>}
   */
  async getById(id) {
    const res = await this.fetcher({
      method: "GET",
      url: `${this.basePath}/unidades/${id}`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res, new Unidade())
  }

  /**
   * @param {UnidadeCreate} model
   * @returns {Promise<ServiceResponse<Unidade>>}
   */
  async create(model) {
    const res = await this.fetcher({
      method: "POST",
      url: `${this.basePath}/unidades`,
      headers: { Authorization: this.authorization },
      data: model,
    })

    return ServiceResponse.ParseFetch(res, new Unidade())
  }

  /**
   * @param {number} id
   * @param {UnidadeUpdate} model
   * @returns {Promise<ServiceResponse<Unidade>>}
   */
  async update(id, model) {
    const res = await this.fetcher({
      method: "PUT",
      url: `${this.basePath}/unidades/${id}`,
      headers: { Authorization: this.authorization },
      data: model,
    })

    return ServiceResponse.ParseFetch(res, new Unidade())
  }

  /**
   * @param {number} id
   * @returns {Promise<ServiceResponse<Unidade>>}
   */
  async delete(id) {
    const res = await this.fetcher({
      method: "DELETE",
      url: `${this.basePath}/unidades/${id}`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res, new Unidade())
  }
}
