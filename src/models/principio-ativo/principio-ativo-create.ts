import { Prescricao } from "../prescricao/prescricao"

export class PrincipioAtivoCreate {
  Uso!: string

  Codigo!: number
  Nome!: string

  FormaFarm!: string
  ViaAdm!: string
  Essencial!: string
  Posologia!: string

  Quantidade!: number

  UnidadeCodigo!: number
  Unidade!: string

  Intervalo!: string
  Durante!: number
  Condicao!: string

  PrescricaoID!: number
  Prescricao?: Prescricao
}
