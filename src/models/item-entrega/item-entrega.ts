import { Entity } from "../entity"
import { Paciente } from "../paciente/paciente"

export class ItemEntrega extends Entity {
  Nome!: string
  Quantidade!: number

  PacienteID!: number
  Paciente?: Paciente
}
