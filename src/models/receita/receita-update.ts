import { Paciente } from "../paciente/paciente"
import { Prescricao } from "../prescricao/prescricao"
import { PrincipioAtivo } from "../principio-ativo/principio-ativo"

export class ReceitaUpdate {
  PacienteID?: number
  Paciente?: Paciente

  // Horarios []ReceitaHorario
  Horarios?: any[]

  DataPrescrita?: Date
  PrescritoPor?: string
  Crm?: number

  Insulina?: boolean
  Insumo?: string

  DataAtualizacao?: Date
  DataValidade?: Date
}
