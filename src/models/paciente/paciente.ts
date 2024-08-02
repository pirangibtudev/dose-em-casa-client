import { Endereco } from "../endereco/endereco"
import { Entity } from "../entity"
import { ItemEntrega } from "../item-entrega/item-entrega"

export class Paciente extends Entity {
  CodigoMatricula!: number
  Nome!: string

  CriterioInclusaoCodigo!: number
  CriterioInclusao!: string

  ItensEntrega!: ItemEntrega[]

  Inativo!: boolean
  InativoMotivoCodigo?: number
  InativoMotivo!: string
  InativoData?: Date

  Subgrupo!: string
  Grupo!: string

  Sexo?: string

  DataInclusao!: Date

  EnderecoID?: string
  Endereco?: Endereco
  Fone1!: string
  Fone2?: string
}
