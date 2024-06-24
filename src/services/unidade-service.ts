import { ServiceResponse } from "../models/service-response"
import { Unidade } from "../models/unidade/unidade"
import { UnidadeCreate } from "../models/unidade/unidade-create"
import { UnidadeUpdate } from "../models/unidade/unidade-update"
import { Service, ServiceConstructorProps } from "./service"

export class UnidadeService extends Service {
  constructor(values: ServiceConstructorProps) {
    super(values)
  }

  async getAll(): Promise<ServiceResponse<Unidade[]>> {
    const res = await this.fetcher({
      method: "GET",
      url: `${this.basePath}/unidades`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res!, [new Unidade()])
  }

  async getById(id: number): Promise<ServiceResponse<Unidade>> {
    const res = await this.fetcher({
      method: "GET",
      url: `${this.basePath}/unidades/${id}`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res!, new Unidade())
  }

  async create(model: UnidadeCreate): Promise<ServiceResponse<Unidade>> {
    const res = await this.fetcher({
      method: "POST",
      url: `${this.basePath}/unidades`,
      headers: { Authorization: this.authorization },
      data: model,
    })

    return ServiceResponse.ParseFetch(res!, new Unidade())
  }

  async update(
    id: number,
    model: UnidadeUpdate,
  ): Promise<ServiceResponse<Unidade>> {
    const res = await this.fetcher({
      method: "PUT",
      url: `${this.basePath}/unidades/${id}`,
      headers: { Authorization: this.authorization },
      data: model,
    })

    return ServiceResponse.ParseFetch(res!, new Unidade())
  }

  async delete(id: number): Promise<ServiceResponse<Unidade>> {
    const res = await this.fetcher({
      method: "DELETE",
      url: `${this.basePath}/unidades/${id}`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res!, new Unidade())
  }
}
