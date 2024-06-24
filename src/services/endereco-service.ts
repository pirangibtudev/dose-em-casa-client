import { Endereco } from "../models/endereco/endereco"
import { EnderecoCreate } from "../models/endereco/endereco-create"
import { EnderecoUpdate } from "../models/endereco/endereco-update"
import { ServiceResponse } from "../models/service-response"
import { Service, ServiceConstructorProps } from "./service"

export class EnderecoService extends Service {
  constructor(values: ServiceConstructorProps) {
    super(values)
  }

  async getAll(): Promise<ServiceResponse<Endereco[]>> {
    const res = await this.fetcher({
      method: "GET",
      url: `${this.basePath}/enderecos`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res!, [new Endereco()])
  }

  /**
   * @param {number} id
   * @returns {Promise<ServiceResponse<Endereco>>}
   */
  async getById(id: number): Promise<ServiceResponse<Endereco>> {
    const res = await this.fetcher({
      method: "GET",
      url: `${this.basePath}/enderecos/${id}`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res!, new Endereco())
  }

  async create(model: EnderecoCreate): Promise<ServiceResponse<Endereco>> {
    const res = await this.fetcher({
      method: "POST",
      url: `${this.basePath}/enderecos`,
      headers: { Authorization: this.authorization },
      data: model,
    })

    return ServiceResponse.ParseFetch(res!, new Endereco())
  }

  async update(
    id: number,
    model: EnderecoUpdate,
  ): Promise<ServiceResponse<Endereco>> {
    const res = await this.fetcher({
      method: "PUT",
      url: `${this.basePath}/enderecos/${id}`,
      headers: { Authorization: this.authorization },
      data: model,
    })

    return ServiceResponse.ParseFetch(res!, new Endereco())
  }

  async delete(id: number): Promise<ServiceResponse<Endereco>> {
    const res = await this.fetcher({
      method: "DELETE",
      url: `${this.basePath}/enderecos/${id}`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res!, new Endereco())
  }
}
