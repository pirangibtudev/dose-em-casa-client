import { Endereco } from "../endereco/endereco.js"
import { Entity } from "../entity.js"
import { Unidade } from "../unidade/unidade.js"

export class Paciente extends Entity {
  /** @type {number} */
  CodigoProntuario
  /** @type{string} */
  Nome
  /** @type {Date} */
  DataNascimento
  /** @type {boolean} */
  Alfabetizado

  /** @type {number} */
  CriterioInclusaoCodigo
  /** @type{string} */
  CriterioInclusao

  /** @type {number} */
  ResultadoAvaliacaoCodigo
  /** @type{string} */
  ResultadoAvaliacao

  // ItensEntrega []ItemEntrega
  /** @type {any[]} */
  ItensEntrega

  /** @type {boolean} */
  Inativo
  /** @type {number | undefined} */
  InativoMotivoCodigo
  /** @type {string} */
  InativoMotivo
  /** @type {Date | undefined} */
  InativoData

  /** @type {number} */
  EnderecoResidenciaID
  /** @type {Endereco | undefined} */
  EnderecoResidencia
  /** @type {number} */
  EnderecoEntregaID
  /** @type {Endereco | undefined} */
  EnderecoEntrega

  /** @type {number} */
  UnidadeReferenciaID
  /** @type {Unidade | undefined} */
  UnidadeReferencia
  /** @type {number} */
  UnidadeSaudeID
  /** @type {Unidade | undefined} */
  UnidadeSaude
  /** @type {number} */
  GrupoCodigo
  /** @type{string} */
  Grupo
  /** @type {number} */
  RegiaoCodigo
  /** @type{string} */
  Regiao

  /** @type {Date} */
  DataInclusao

  // PessoasAutorizadas []PessoaAutorizada
  /** @type {any[]} */
  PessoasAutorizadas
}
