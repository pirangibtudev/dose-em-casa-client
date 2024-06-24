import { Entity } from "../entity"

export class Endereco extends Entity {
  MunicipioCodigo!: number
  Municipio!: string

  LogradouroTipo!: string
  LogradouroCodigo!: number
  Logradouro!: string

  BairroCodigo!: number
  Bairro!: string

  Numero!: number
  Complemento?: string
  Cep!: number

  PontoReferencia?: string
  TipoTelefone?: string
  Telefone?: string
}
