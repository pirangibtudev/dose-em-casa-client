import { Receita } from "../models/receita/receita"

export class FakeReceitaFactory {
  static create(rel: { PrescricaoID: number; PrincipioAtivoID: number }) {
    const receita = new Receita()
    receita.PrescricaoID = rel.PrescricaoID
    receita.Prescricao
    receita.PrincipioAtivoID = rel.PrincipioAtivoID
    receita.PrincipioAtivo
    receita.Horarios

    return receita
  }
}
