import { Prescricao } from "../prescricao/prescricao"
import { PrincipioAtivo } from "../principio-ativo/principio-ativo"

export class ReceitaCreate {
  PrescricaoID!: number
  Prescricao?: Prescricao

  PrincipioAtivoID!: number
  PrincipioAtivo?: PrincipioAtivo

  // Horarios []ReceitaHorario
  Horarios?: any[]
}
