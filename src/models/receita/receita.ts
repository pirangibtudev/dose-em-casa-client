import { Entity } from "../entity"
import { Paciente } from "../paciente/paciente"
import { Prescricao } from "../prescricao/prescricao"
import { PrincipioAtivo } from "../principio-ativo/principio-ativo"
import { ReceitaHorario } from "../receita-horario/receita-horario"

export class Receita extends Entity {
  PrescricaoID!: number
  Prescricao?: Prescricao

  PrincipioAtivoID!: number
  PrincipioAtivo?: PrincipioAtivo

  PacienteID!: number
  Paciente?: Paciente

  Horarios?: ReceitaHorario[]

  DataPrescrita!: Date
  PrescritoPor!: string
  Crm!: number
}
