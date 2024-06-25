import { Entity } from "../entity"
import { Paciente } from "../paciente/paciente"
import { Unidade } from "../unidade/unidade"

export class Prescricao extends Entity {
  PacienteID!: number
  Paciente?: Paciente

  Atendimento?: string

  Codigo!: string

  ReceitaControlada?: string

  Data!: Date

  UnidadeID!: number
  Unidade?: Unidade

  ProfissionalCodigo!: number
  Profissional!: string
  ProfissionalCboCodigo!: number
  ProfissionalCbo!: string

  // PrincipioAtivos []PrincipioAtivo
  // Produtos        []Produto
  PrincipioAtivos!: any[]
  Produtos!: any[]
}
