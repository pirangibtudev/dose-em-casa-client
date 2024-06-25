import { GetAllOptions } from "../@types/get-all-options"
import { Prescricao } from "../models/prescricao/prescricao"
import { PrescricaoCreate } from "../models/prescricao/prescricao-create"
import { PrescricaoUpdate } from "../models/prescricao/prescricao-update"
import { ServiceResponse } from "../models/service-response"
import { Service, ServiceConstructorProps } from "./service"

export class PrescricaoService extends Service {
  constructor(values: ServiceConstructorProps) {
    super(values)
  }

  async getAll(
    options?: Partial<GetAllOptions<Prescricao>>,
  ): Promise<ServiceResponse<Prescricao[]>> {
    const res = await this.fetcher({
      method: "GET",
      url: `${this.basePath}/prescricaos`,
      headers: { Authorization: this.authorization },
      params: { ...options },
    })

    return ServiceResponse.ParseFetch(res!, [new Prescricao()])
  }

  async getById(id: number): Promise<ServiceResponse<Prescricao>> {
    const res = await this.fetcher({
      method: "GET",
      url: `${this.basePath}/prescricaos/${id}`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res!, new Prescricao())
  }

  async create(model: PrescricaoCreate): Promise<ServiceResponse<Prescricao>> {
    const res = await this.fetcher({
      method: "POST",
      url: `${this.basePath}/prescricaos`,
      headers: { Authorization: this.authorization },
      data: model,
    })

    return ServiceResponse.ParseFetch(res!, new Prescricao())
  }

  async update(
    id: number,
    model: PrescricaoUpdate,
  ): Promise<ServiceResponse<Prescricao>> {
    const res = await this.fetcher({
      method: "PUT",
      url: `${this.basePath}/prescricaos/${id}`,
      headers: { Authorization: this.authorization },
      data: model,
    })

    return ServiceResponse.ParseFetch(res!, new Prescricao())
  }

  async delete(id: number): Promise<ServiceResponse<Prescricao>> {
    const res = await this.fetcher({
      method: "DELETE",
      url: `${this.basePath}/prescricaos/${id}`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res!, new Prescricao())
  }
}
