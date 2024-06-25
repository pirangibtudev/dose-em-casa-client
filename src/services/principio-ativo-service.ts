import { GetAllOptions } from "../@types/get-all-options"
import { PrincipioAtivo } from "../models/principio-ativo/principio-ativo"
import { PrincipioAtivoCreate } from "../models/principio-ativo/principio-ativo-create"
import { PrincipioAtivoUpdate } from "../models/principio-ativo/principio-ativo-update"
import { ServiceResponse } from "../models/service-response"
import { Service, ServiceConstructorProps } from "./service"

export class PrincipioAtivoService extends Service {
  constructor(values: ServiceConstructorProps) {
    super(values)
  }

  async getAll(
    options?: Partial<GetAllOptions<PrincipioAtivo>>,
  ): Promise<ServiceResponse<PrincipioAtivo[]>> {
    const res = await this.fetcher({
      method: "GET",
      url: `${this.basePath}/principio_ativos`,
      headers: { Authorization: this.authorization },
      params: { ...options },
    })

    return ServiceResponse.ParseFetch(res!, [new PrincipioAtivo()])
  }

  async getById(id: number): Promise<ServiceResponse<PrincipioAtivo>> {
    const res = await this.fetcher({
      method: "GET",
      url: `${this.basePath}/principio_ativos/${id}`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res!, new PrincipioAtivo())
  }

  async create(
    model: PrincipioAtivoCreate,
  ): Promise<ServiceResponse<PrincipioAtivo>> {
    const res = await this.fetcher({
      method: "POST",
      url: `${this.basePath}/principio_ativos`,
      headers: { Authorization: this.authorization },
      data: model,
    })

    return ServiceResponse.ParseFetch(res!, new PrincipioAtivo())
  }

  async update(
    id: number,
    model: PrincipioAtivoUpdate,
  ): Promise<ServiceResponse<PrincipioAtivo>> {
    const res = await this.fetcher({
      method: "PUT",
      url: `${this.basePath}/principio_ativos/${id}`,
      headers: { Authorization: this.authorization },
      data: model,
    })

    return ServiceResponse.ParseFetch(res!, new PrincipioAtivo())
  }

  async delete(id: number): Promise<ServiceResponse<PrincipioAtivo>> {
    const res = await this.fetcher({
      method: "DELETE",
      url: `${this.basePath}/principio_ativos/${id}`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res!, new PrincipioAtivo())
  }
}
