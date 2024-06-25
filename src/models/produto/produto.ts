import { Entity } from "../entity"
import { Prescricao } from "../prescricao/prescricao"

export class Produto extends Entity {
  Codigo!: number
  Nome!: string
  Quantidade!: number
  Uso!: string

  PrescricaoID!: number
  Prescricao?: Prescricao
}
