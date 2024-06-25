import { GetAllOptions } from "../@types/get-all-options"
import { Receita } from "../models/receita/receita"
import { ReceitaCreate } from "../models/receita/receita-create"
import { ReceitaUpdate } from "../models/receita/receita-update"
import { ServiceResponse } from "../models/service-response"
import { Service, ServiceConstructorProps } from "./service"

export class ReceitaService extends Service {
  constructor(values: ServiceConstructorProps) {
    super(values)
  }

  async getAll(
    options?: Partial<GetAllOptions<Receita>>,
  ): Promise<ServiceResponse<Receita[]>> {
    const res = await this.fetcher({
      method: "GET",
      url: `${this.basePath}/receitas`,
      headers: { Authorization: this.authorization },
      params: { ...options },
    })

    return ServiceResponse.ParseFetch(res!, [new Receita()])
  }

  async getById(id: number): Promise<ServiceResponse<Receita>> {
    const res = await this.fetcher({
      method: "GET",
      url: `${this.basePath}/receitas/${id}`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res!, new Receita())
  }

  async create(model: ReceitaCreate): Promise<ServiceResponse<Receita>> {
    const res = await this.fetcher({
      method: "POST",
      url: `${this.basePath}/receitas`,
      headers: { Authorization: this.authorization },
      data: model,
    })

    return ServiceResponse.ParseFetch(res!, new Receita())
  }

  async update(
    id: number,
    model: ReceitaUpdate,
  ): Promise<ServiceResponse<Receita>> {
    const res = await this.fetcher({
      method: "PUT",
      url: `${this.basePath}/receitas/${id}`,
      headers: { Authorization: this.authorization },
      data: model,
    })

    return ServiceResponse.ParseFetch(res!, new Receita())
  }

  async delete(id: number): Promise<ServiceResponse<Receita>> {
    const res = await this.fetcher({
      method: "DELETE",
      url: `${this.basePath}/receitas/${id}`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res!, new Receita())
  }
}
