import { GetAllOptions } from "../@types/get-all-options"
import { ItemEntrega } from "../models/item-entrega/item-entrega"
import { ItemEntregaCreate } from "../models/item-entrega/item-entrega-create"
import { ItemEntregaUpdate } from "../models/item-entrega/item-entrega-update"
import { ServiceResponse } from "../models/service-response"
import { Service, ServiceConstructorProps } from "./service"

export class ItemEntregaService extends Service {
  constructor(values: ServiceConstructorProps) {
    super(values)
  }

  async getAll(
    options?: Partial<GetAllOptions<ItemEntrega>>,
  ): Promise<ServiceResponse<ItemEntrega[]>> {
    const res = await this.fetcher({
      method: "GET",
      url: `${this.basePath}/item_entregas`,
      headers: { Authorization: this.authorization },
      params: { ...options },
    })

    return ServiceResponse.ParseFetch(res!, [new ItemEntrega()])
  }

  async getById(id: number): Promise<ServiceResponse<ItemEntrega>> {
    const res = await this.fetcher({
      method: "GET",
      url: `${this.basePath}/item_entregas/${id}`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res!, new ItemEntrega())
  }

  async create(
    model: ItemEntregaCreate,
  ): Promise<ServiceResponse<ItemEntrega>> {
    const res = await this.fetcher({
      method: "POST",
      url: `${this.basePath}/item_entregas`,
      headers: { Authorization: this.authorization },
      data: model,
    })

    return ServiceResponse.ParseFetch(res!, new ItemEntrega())
  }

  async update(
    id: number,
    model: ItemEntregaUpdate,
  ): Promise<ServiceResponse<ItemEntrega>> {
    const res = await this.fetcher({
      method: "PUT",
      url: `${this.basePath}/item_entregas/${id}`,
      headers: { Authorization: this.authorization },
      data: model,
    })

    return ServiceResponse.ParseFetch(res!, new ItemEntrega())
  }

  async delete(id: number): Promise<ServiceResponse<ItemEntrega>> {
    const res = await this.fetcher({
      method: "DELETE",
      url: `${this.basePath}/item_entregas/${id}`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res!, new ItemEntrega())
  }
}
