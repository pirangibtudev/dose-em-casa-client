import { Entity } from "../entity.js"

export class Endereco extends Entity {
  /** @type {number} */
  MunicipioCodigo
  /** @type {string} */
  Municipio

  /** @type {string} */
  LogradouroTipo
  /** @type {number} */
  LogradouroCodigo
  /** @type {string} */
  Logradouro

  /** @type {number} */
  BairroCodigo
  /** @type {string} */
  Bairro

  /** @type {number} */
  Numero
  /** @type {string | undefined} */
  Complemento
  /** @type {number} */
  Cep

  /** @type {string | undefined} */
  PontoReferencia
  /** @type {string | undefined} */
  TipoTelefone
  /** @type {string | undefined} */
  Telefone
}
