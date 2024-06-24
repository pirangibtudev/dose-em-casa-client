import { Entity } from "../entity"
import { Paciente } from "../paciente/paciente"

export class PessoaAutorizada extends Entity {
  Nome!: string
  TelefoneTipo!: string
  Telefone!: string

  PacienteID!: number
  Paciente?: Paciente
}
