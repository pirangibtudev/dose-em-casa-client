import { GetAllOptions } from "../@types/get-all-options"
import { Produto } from "../models/produto/produto"
import { ProdutoCreate } from "../models/produto/produto-create"
import { ProdutoUpdate } from "../models/produto/produto-update"
import { ServiceResponse } from "../models/service-response"
import { Service, ServiceConstructorProps } from "./service"

export class ProdutoService extends Service {
  constructor(values: ServiceConstructorProps) {
    super(values)
  }

  async getAll(
    options?: Partial<GetAllOptions<Produto>>,
  ): Promise<ServiceResponse<Produto[]>> {
    const res = await this.fetcher({
      method: "GET",
      url: `${this.basePath}/produtos`,
      headers: { Authorization: this.authorization },
      params: { ...options },
    })

    return ServiceResponse.ParseFetch(res!, [new Produto()])
  }

  async getById(id: number): Promise<ServiceResponse<Produto>> {
    const res = await this.fetcher({
      method: "GET",
      url: `${this.basePath}/produtos/${id}`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res!, new Produto())
  }

  async create(model: ProdutoCreate): Promise<ServiceResponse<Produto>> {
    const res = await this.fetcher({
      method: "POST",
      url: `${this.basePath}/produtos`,
      headers: { Authorization: this.authorization },
      data: model,
    })

    return ServiceResponse.ParseFetch(res!, new Produto())
  }

  async update(
    id: number,
    model: ProdutoUpdate,
  ): Promise<ServiceResponse<Produto>> {
    const res = await this.fetcher({
      method: "PUT",
      url: `${this.basePath}/produtos/${id}`,
      headers: { Authorization: this.authorization },
      data: model,
    })

    return ServiceResponse.ParseFetch(res!, new Produto())
  }

  async delete(id: number): Promise<ServiceResponse<Produto>> {
    const res = await this.fetcher({
      method: "DELETE",
      url: `${this.basePath}/produtos/${id}`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res!, new Produto())
  }
}
