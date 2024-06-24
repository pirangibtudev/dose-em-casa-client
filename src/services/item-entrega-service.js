import { ItemEntrega } from "../models/item-entrega/item-entrega.js"
import { ItemEntregaCreate } from "../models/item-entrega/item-entrega-create.js"
import { ItemEntregaUpdate } from "../models/item-entrega/item-entrega-update.js"
import { ServiceResponse } from "../models/service-response.js"
import { Service } from "./service.js"

export class ItemEntregaService extends Service {
  /** @param {import("./service.js").ServiceConstructorProps} values  */
  constructor(values) {
    super(values)
  }

  async getAll() {
    const res = await this.fetcher({
      method: "GET",
      url: `${this.basePath}/item_entregas`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res, [new ItemEntrega()])
  }

  /** @param {number} id  */
  async getById(id) {
    const res = await this.fetcher({
      method: "GET",
      url: `${this.basePath}/item_entregas/${id}`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res, new ItemEntrega())
  }

  /** @param {ItemEntregaCreate} model  */
  async create(model) {
    const res = await this.fetcher({
      method: "POST",
      url: `${this.basePath}/item_entregas`,
      headers: { Authorization: this.authorization },
      data: model,
    })

    return ServiceResponse.ParseFetch(res, new ItemEntrega())
  }

  /**
   * @param {number} id
   * @param {ItemEntregaUpdate} model
   */
  async update(id, model) {
    const res = await this.fetcher({
      method: "PUT",
      url: `${this.basePath}/item_entregas/${id}`,
      headers: { Authorization: this.authorization },
      data: model,
    })

    return ServiceResponse.ParseFetch(res, new ItemEntrega())
  }

  /** @param {number} id  */
  async delete(id) {
    const res = await this.fetcher({
      method: "DELETE",
      url: `${this.basePath}/item_entregas/${id}`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res, new ItemEntrega())
  }
}
