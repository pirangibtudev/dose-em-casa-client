import { Paciente } from "../models/paciente/paciente.js"
import { PacienteCreate } from "../models/paciente/paciente-create.js"
import { PacienteUpdate } from "../models/paciente/paciente-update.js"
import { ServiceResponse } from "../models/service-response.js"
import { Service } from "./service.js"

export class PacienteService extends Service {
  /** @param {import("./service.js").ServiceConstructorProps} values  */
  constructor(values) {
    super(values)
  }

  async getAll() {
    const res = await this.fetcher({
      method: "GET",
      url: `${this.basePath}/pacientes`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res, [new Paciente()])
  }

  /** @param {number} id  */
  async getById(id) {
    const res = await this.fetcher({
      method: "GET",
      url: `${this.basePath}/pacientes/${id}`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res, new Paciente())
  }

  /** @param {PacienteCreate} model  */
  async create(model) {
    const res = await this.fetcher({
      method: "POST",
      url: `${this.basePath}/pacientes`,
      headers: { Authorization: this.authorization },
      data: model,
    })

    return ServiceResponse.ParseFetch(res, new Paciente())
  }

  /**
   * @param {number} id
   * @param {PacienteUpdate} model
   */
  async update(id, model) {
    const res = await this.fetcher({
      method: "PUT",
      url: `${this.basePath}/pacientes/${id}`,
      headers: { Authorization: this.authorization },
      data: model,
    })

    return ServiceResponse.ParseFetch(res, new Paciente())
  }

  /** @param {number} id  */
  async delete(id) {
    const res = await this.fetcher({
      method: "DELETE",
      url: `${this.basePath}/pacientes/${id}`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res, new Paciente())
  }
}
