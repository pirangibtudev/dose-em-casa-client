import { Endereco } from "../endereco/endereco"
import { ItemEntrega } from "../item-entrega/item-entrega"
import { PessoaAutorizada } from "../pessoa-autorizada/pessoa-autorizada"
import { Unidade } from "../unidade/unidade"

export class PacienteCreate {
  CodigoProntuario!: number
  Nome!: string
  DataNascimento!: Date
  Alfabetizado!: boolean

  CriterioInclusaoCodigo!: number
  CriterioInclusao!: string

  ResultadoAvaliacaoCodigo!: number
  ResultadoAvaliacao!: string

  ItensEntrega!: ItemEntrega[]

  Inativo!: boolean
  InativoMotivoCodigo?: number
  InativoMotivo!: string
  InativoData?: Date

  EnderecoResidenciaID!: number
  EnderecoResidencia?: Endereco
  EnderecoEntregaID!: number
  EnderecoEntrega?: Endereco

  UnidadeReferenciaID!: number
  UnidadeReferencia?: Unidade
  UnidadeSaudeID!: number
  UnidadeSaude?: Unidade
  GrupoCodigo!: number
  Grupo!: string
  RegiaoCodigo!: number
  Regiao!: string

  DataInclusao!: Date

  PessoasAutorizadas!: PessoaAutorizada[]
}
