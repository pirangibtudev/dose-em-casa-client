import { GetAllOptions } from "../@types/get-all-options"
import { ReceitaHorario } from "../models/receita-horario/receita-horario"
import { ReceitaHorarioCreate } from "../models/receita-horario/receita-horario-create"
import { ReceitaHorarioUpdate } from "../models/receita-horario/receita-horario-update"
import { ServiceResponse } from "../models/service-response"
import { Service, ServiceConstructorProps } from "./service"

export class ReceitaHorarioService extends Service {
  constructor(values: ServiceConstructorProps) {
    super(values)
  }

  async getAll(
    options?: Partial<GetAllOptions<ReceitaHorario>>,
  ): Promise<ServiceResponse<ReceitaHorario[]>> {
    const res = await this.fetcher({
      method: "GET",
      url: `${this.basePath}/receita_horarios`,
      headers: { Authorization: this.authorization },
      params: { ...options },
    })

    return ServiceResponse.ParseFetch(res!, [new ReceitaHorario()])
  }

  async getById(id: number): Promise<ServiceResponse<ReceitaHorario>> {
    const res = await this.fetcher({
      method: "GET",
      url: `${this.basePath}/receita_horarios/${id}`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res!, new ReceitaHorario())
  }

  async create(
    model: ReceitaHorarioCreate,
  ): Promise<ServiceResponse<ReceitaHorario>> {
    const res = await this.fetcher({
      method: "POST",
      url: `${this.basePath}/receita_horarios`,
      headers: { Authorization: this.authorization },
      data: model,
    })

    return ServiceResponse.ParseFetch(res!, new ReceitaHorario())
  }

  async update(
    id: number,
    model: ReceitaHorarioUpdate,
  ): Promise<ServiceResponse<ReceitaHorario>> {
    const res = await this.fetcher({
      method: "PUT",
      url: `${this.basePath}/receita_horarios/${id}`,
      headers: { Authorization: this.authorization },
      data: model,
    })

    return ServiceResponse.ParseFetch(res!, new ReceitaHorario())
  }

  async delete(id: number): Promise<ServiceResponse<ReceitaHorario>> {
    const res = await this.fetcher({
      method: "DELETE",
      url: `${this.basePath}/receita_horarios/${id}`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res!, new ReceitaHorario())
  }
}
