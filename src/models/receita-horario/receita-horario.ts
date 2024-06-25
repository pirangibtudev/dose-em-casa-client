import { Entity } from "../entity"
import { Receita } from "../receita/receita"

export class ReceitaHorario extends Entity {
  ReceitaID!: number
  Receita?: Receita

  Horario!: string
  Icone?: string
  Quantidade!: number
  Obs?: string
}
