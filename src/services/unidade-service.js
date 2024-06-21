import { ServiceResponse } from "../models/service-response"
import { Unidade } from "../models/unidade/unidade"
import { UnidadeCreate } from "../models/unidade/unidade-create"
import { UnidadeUpdate } from "../models/unidade/unidade-update"
import { Service } from "./service.js"

export class UnidadeService extends Service {
  /** @param {import("./service.js").ServiceConstructorProps} values  */
  constructor(values) {
    super(values)
  }

  async getAll() {
    const res = await this.fetcher({
      method: "GET",
      url: `${this.basePath}/unidades`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res, [new Unidade()])
  }

  /** @param {number} id  */
  async getById(id) {
    const res = await this.fetcher({
      method: "GET",
      url: `${this.basePath}/unidades/${id}`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res, new Unidade())
  }

  /** @param {UnidadeCreate} model  */
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

  /** @param {number} id  */
  async delete(id) {
    const res = await this.fetcher({
      method: "DELETE",
      url: `${this.basePath}/unidades/${id}`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res, new Unidade())
  }
}
