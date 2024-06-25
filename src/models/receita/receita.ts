import { Entity } from "../entity"
import { Prescricao } from "../prescricao/prescricao"
import { PrincipioAtivo } from "../principio-ativo/principio-ativo"

export class Receita extends Entity {
  PrescricaoID!: number
  Prescricao?: Prescricao

  PrincipioAtivoID!: number
  PrincipioAtivo?: PrincipioAtivo

  // Horarios []ReceitaHorario
  Horarios?: any[]
}
