import { Endereco } from "../endereco/endereco"
import { ItemEntrega } from "../item-entrega/item-entrega"

export class PacienteUpdate {
  CodigoMatricula?: number
  Nome?: string
  DataNascimento?: Date

  CriterioInclusaoCodigo?: number
  CriterioInclusao?: string

  ItensEntrega?: ItemEntrega[]

  Obito?: boolean
  Inativo?: boolean
  InativoMotivoCodigo?: number
  InativoMotivo?: string
  InativoData?: Date

  Subgrupo?: string
  Grupo?: string
  UnidadeReferencia?: string

  Sexo?: string

  DataInclusao?: Date

  EnderecoID?: string
  Endereco?: Endereco
  Fone1?: string
  Fone2?: string

  NomeSocial?: string
  Obs?: string
}
