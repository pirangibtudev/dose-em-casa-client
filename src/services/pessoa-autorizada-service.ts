import { GetAllOptions } from "../@types/get-all-options"
import { PessoaAutorizada } from "../models/pessoa-autorizada/pessoa-autorizada"
import { PessoaAutorizadaCreate } from "../models/pessoa-autorizada/pessoa-autorizada-create"
import { PessoaAutorizadaUpdate } from "../models/pessoa-autorizada/pessoa-autorizada-update"
import { ServiceResponse } from "../models/service-response"
import { Service, ServiceConstructorProps } from "./service"

export class PessoaAutorizadaService extends Service {
  constructor(values: ServiceConstructorProps) {
    super(values)
  }

  async getAll(
    options?: Partial<GetAllOptions<PessoaAutorizada>>,
  ): Promise<ServiceResponse<PessoaAutorizada[]>> {
    const res = await this.fetcher({
      method: "GET",
      url: `${this.basePath}/pessoa_autorizadas`,
      headers: { Authorization: this.authorization },
      params: { ...options },
    })

    return ServiceResponse.ParseFetch(res!, [new PessoaAutorizada()])
  }

  async getById(id: number) {
    const res = await this.fetcher({
      method: "GET",
      url: `${this.basePath}/pessoa_autorizadas/${id}`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res!, new PessoaAutorizada())
  }

  async create(
    model: PessoaAutorizadaCreate,
  ): Promise<ServiceResponse<PessoaAutorizada>> {
    const res = await this.fetcher({
      method: "POST",
      url: `${this.basePath}/pessoa_autorizadas`,
      headers: { Authorization: this.authorization },
      data: model,
    })

    return ServiceResponse.ParseFetch(res!, new PessoaAutorizada())
  }

  async update(
    id: number,
    model: PessoaAutorizadaUpdate,
  ): Promise<ServiceResponse<PessoaAutorizada>> {
    const res = await this.fetcher({
      method: "PUT",
      url: `${this.basePath}/pessoa_autorizadas/${id}`,
      headers: { Authorization: this.authorization },
      data: model,
    })

    return ServiceResponse.ParseFetch(res!, new PessoaAutorizada())
  }

  async delete(id: number): Promise<ServiceResponse<PessoaAutorizada>> {
    const res = await this.fetcher({
      method: "DELETE",
      url: `${this.basePath}/pessoa_autorizadas/${id}`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res!, new PessoaAutorizada())
  }
}
