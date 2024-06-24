import { Endereco } from "../endereco/endereco.js"
import { Unidade } from "../unidade/unidade.js"

export class PacienteUpdate {
  /** @type {number | undefined} */
  CodigoProntuario
  /** @type {string | undefined} */
  Nome
  /** @type {Date | undefined} */
  DataNascimento
  /** @type {boolean | undefined} */
  Alfabetizado

  /** @type {number | undefined} */
  CriterioInclusaoCodigo
  /** @type {string | undefined} */
  CriterioInclusao

  /** @type {number | undefined} */
  ResultadoAvaliacaoCodigo
  /** @type {string | undefined} */
  ResultadoAvaliacao

  // TODO: ItensEntrega []ItemEntrega
  /** @type {any[] | undefined} */
  ItensEntrega

  /** @type {boolean | undefined} */
  Inativo
  /** @type {number | undefined} */
  InativoMotivoCodigo
  /** @type {string | undefined} */
  InativoMotivo
  /** @type {Date | undefined} */
  InativoData

  /** @type {number | undefined} */
  EnderecoResidenciaID
  /** @type {Endereco | undefined} */
  EnderecoResidencia
  /** @type {number | undefined} */
  EnderecoEntregaID
  /** @type {Endereco | undefined} */
  EnderecoEntrega

  /** @type {number | undefined} */
  UnidadeReferenciaID
  /** @type {Unidade | undefined} */
  UnidadeReferencia
  /** @type {number | undefined} */
  UnidadeSaudeID
  /** @type {Unidade | undefined} */
  UnidadeSaude
  /** @type {number | undefined} */
  GrupoCodigo
  /** @type {string | undefined} */
  Grupo
  /** @type {number | undefined} */
  RegiaoCodigo
  /** @type {string | undefined} */
  Regiao

  /** @type {Date | undefined} */
  DataInclusao

  // TODO: PessoasAutorizadas []PessoaAutorizada
  /** @type {any[] | undefined} */
  PessoasAutorizadas
}
