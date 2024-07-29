import { Prescricao } from "../prescricao/prescricao"
import { PrincipioAtivo } from "../principio-ativo/principio-ativo"
import { ReceitaHorario } from "../receita-horario/receita-horario"

export class ReceitaCreate {
  PrescricaoID!: number
  Prescricao?: Prescricao

  PrincipioAtivoID!: number
  PrincipioAtivo?: PrincipioAtivo

  Horarios?: ReceitaHorario[]

  DataPrescrita!: Date
  PrescritoPor!: string
  Crm!: number
}
