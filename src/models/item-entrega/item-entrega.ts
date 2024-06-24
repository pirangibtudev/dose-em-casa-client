import { Entity } from "../entity"
import { Paciente } from "../paciente/paciente"

export class ItemEntrega extends Entity {
  Nome!: string

  PacienteID!: number
  Paciente?: Paciente
}
