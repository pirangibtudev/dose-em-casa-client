import { GetAllOptions } from "../@types/get-all-options"
import { Paciente } from "../models/paciente/paciente"
import { PacienteCreate } from "../models/paciente/paciente-create"
import { PacienteUpdate } from "../models/paciente/paciente-update"
import { ServiceResponse } from "../models/service-response"
import { Service, ServiceConstructorProps } from "./service"

export class PacienteService extends Service {
  constructor(values: ServiceConstructorProps) {
    super(values)
  }

  async getAll(
    options?: Partial<GetAllOptions<Paciente>>,
  ): Promise<ServiceResponse<Paciente[]>> {
    const res = await this.fetcher({
      method: "GET",
      url: `${this.basePath}/pacientes`,
      headers: { Authorization: this.authorization },
      params: { ...options },
    })

    return ServiceResponse.ParseFetch(res!, [new Paciente()])
  }

  async countAll(
    options?: Partial<GetAllOptions<Paciente>>,
  ): Promise<ServiceResponse<number>> {
    const res = await this.fetcher({
      method: "GET",
      url: `${this.basePath}/pacientes/count`,
      headers: { Authorization: this.authorization },
      params: { ...options },
    })

    return ServiceResponse.ParseFetch(res!, 0)
  }

  async getById(id: number): Promise<ServiceResponse<Paciente>> {
    const res = await this.fetcher({
      method: "GET",
      url: `${this.basePath}/pacientes/${id}`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res!, new Paciente())
  }

  async create(model: PacienteCreate): Promise<ServiceResponse<Paciente>> {
    const res = await this.fetcher({
      method: "POST",
      url: `${this.basePath}/pacientes`,
      headers: { Authorization: this.authorization },
      data: model,
    })

    return ServiceResponse.ParseFetch(res!, new Paciente())
  }

  async update(
    id: number,
    model: PacienteUpdate,
  ): Promise<ServiceResponse<Paciente>> {
    const res = await this.fetcher({
      method: "PUT",
      url: `${this.basePath}/pacientes/${id}`,
      headers: { Authorization: this.authorization },
      data: model,
    })

    return ServiceResponse.ParseFetch(res!, new Paciente())
  }

  async delete(id: number): Promise<ServiceResponse<Paciente>> {
    const res = await this.fetcher({
      method: "DELETE",
      url: `${this.basePath}/pacientes/${id}`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res!, new Paciente())
  }
}
