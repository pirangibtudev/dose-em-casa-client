import { Entity } from "../entity.js"
import { Paciente } from "../paciente/paciente.js"

export class ItemEntrega extends Entity {
  /** @type {string} */
  Nome

  /** @type {number} */
  PacienteID
  /** @type {Paciente | undefined} */
  Paciente
}
