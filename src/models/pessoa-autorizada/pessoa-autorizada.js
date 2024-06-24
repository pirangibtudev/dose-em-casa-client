import { Entity } from "../entity.js"
import { Paciente } from "../paciente/paciente.js"

export class PessoaAutorizada extends Entity {
  /** @type {string} */
  Nome
  /** @type {string} */
  TelefoneTipo
  /** @type {string} */
  Telefone

  /** @type {number} */
  PacienteID
  /** @type {Paciente | undefined} */
  Paciente
}
