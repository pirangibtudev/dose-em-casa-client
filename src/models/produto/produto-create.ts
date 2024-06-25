import { Prescricao } from "../prescricao/prescricao"

export class ProdutoCreate {
  Codigo!: number
  Nome!: string
  Quantidade!: number
  Uso!: string

  PrescricaoID!: number
  Prescricao?: Prescricao
}
