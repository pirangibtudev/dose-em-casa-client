import { ItemEntrega } from "../item-entrega/item-entrega"

export class PacienteUpdate {
  CodigoMatricula?: number
  Nome?: string
  DataNascimento?: Date

  CriterioInclusaoCodigo?: number
  CriterioInclusao?: string

  ItensEntrega?: ItemEntrega[]

  Inativo?: boolean
  InativoMotivoCodigo?: number
  InativoMotivo?: string
  InativoData?: Date

  Subgrupo?: string
  Grupo?: string

  Sexo?: string

  DataInclusao?: Date
}
