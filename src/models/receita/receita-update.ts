import { Prescricao } from "../prescricao/prescricao"
import { PrincipioAtivo } from "../principio-ativo/principio-ativo"

export class ReceitaUpdate {
  PrescricaoID?: number
  Prescricao?: Prescricao

  PrincipioAtivoID?: number
  PrincipioAtivo?: PrincipioAtivo

  // Horarios []ReceitaHorario
  Horarios?: any[]

  DataPrescrita?: Date
  PrescritoPor?: string
  Crm?: number
}
