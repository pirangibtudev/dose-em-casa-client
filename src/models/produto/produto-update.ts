import { Prescricao } from "../prescricao/prescricao"

export class ProdutoUpdate {
  Codigo?: number
  Nome?: string
  Quantidade?: number
  Uso?: string

  PrescricaoID?: number
  Prescricao?: Prescricao
}
