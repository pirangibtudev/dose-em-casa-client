import { Receita } from "../receita/receita"

export class ReceitaHorarioCreate {
  ReceitaID!: number
  Receita?: Receita

  Horario!: string
  Icone?: string
  Quantidade!: number
  Obs?: string
}
