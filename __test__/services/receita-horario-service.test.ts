import { FakeEnderecoFactory } from "../../src/factories/fake-endereco.factory"
import { FakePacienteFactory } from "../../src/factories/fake-paciente.factory"
import { FakePrescricaoFactory } from "../../src/factories/fake-prescricao.factory"
import { FakePrincipioAtivoFactory } from "../../src/factories/fake-principio-ativo.factory"
import { FakeReceitaHorarioFactory } from "../../src/factories/fake-receita-horario.factory"
import { FakeReceitaFactory } from "../../src/factories/fake-receita.factory"
import { FakeUnidadeFactory } from "../../src/factories/fake-unidade.factory"
import { FakeUserFactory } from "../../src/factories/fake-user.factory"
import DoseEmCasaClient from "../../src/main"

describe("receita horario service test", () => {
  const client = new DoseEmCasaClient({})

  beforeAll(async () => {
    const { data: admin } = await client.authService.login({
      Username: "admin",
      Password: "admin@1234",
    })
    client.authorization = `Bearer ${admin.Token}`

    const { data: usr } = await client.authService.register(
      FakeUserFactory.create(),
    )
    client.authorization = `Bearer ${usr.Token}`
  })

  async function createPaciente() {
    const paciente = FakePacienteFactory.create()

    const unidade1 = await client.unidadeService.create(
      FakeUnidadeFactory.create(),
    )
    const unidade2 = await client.unidadeService.create(
      FakeUnidadeFactory.create(),
    )
    const endereco1 = await client.enderecoService.create(
      FakeEnderecoFactory.create(),
    )
    const endereco2 = await client.enderecoService.create(
      FakeEnderecoFactory.create(),
    )

    paciente.UnidadeReferenciaID = unidade1.data.ID
    paciente.UnidadeSaudeID = unidade2.data.ID
    paciente.EnderecoEntregaID = endereco1.data.ID
    paciente.EnderecoResidenciaID = endereco2.data.ID

    return await client.pacienteService.create(paciente)
  }

  async function createPrescricao() {
    const { data: paciente } = await createPaciente()
    const { data: unidade } = await client.unidadeService.create(
      FakeUnidadeFactory.create(),
    )

    const prescricaoRes = await client.prescricaoService.create(
      FakePrescricaoFactory.create({
        pacienteId: paciente.ID,
        unidadeId: unidade.ID,
      }),
    )

    return prescricaoRes
  }

  async function createReceita() {
    const { data: prescricao } = await createPrescricao()
    const { data: principioAtivo } = await client.principioAtivoService.create(
      FakePrincipioAtivoFactory.create({ PrescricaoID: prescricao.ID }),
    )

    const resReceita = await client.receitaService.create(
      FakeReceitaFactory.create({
        PrescricaoID: prescricao.ID,
        PrincipioAtivoID: principioAtivo.ID,
      }),
    )

    return resReceita
  }

  it("create a new receita horario", async () => {
    const { data: receita } = await createReceita()

    const { status } = await client.receitaHorarioService.create(
      FakeReceitaHorarioFactory.create({
        ReceitaID: receita.ID,
      }),
    )

    expect(status).toBe(201)
  })

  it("create a new receita horario and update", async () => {
    const { data: receita } = await createReceita()

    const { data: created } = await client.receitaHorarioService.create(
      FakeReceitaHorarioFactory.create({
        ReceitaID: receita.ID,
      }),
    )

    const { status } = await client.receitaHorarioService.update(created.ID, {
      ...created,
      Horario: FakeReceitaHorarioFactory.create({ ReceitaID: receita.ID })
        .Horario,
    })

    expect(status).toBe(200)
  })

  it("create a new receita horario and delete", async () => {
    const { data: receita } = await createReceita()

    const { data: created } = await client.receitaHorarioService.create(
      FakeReceitaHorarioFactory.create({
        ReceitaID: receita.ID,
      }),
    )

    const { status: deletedStatus } = await client.receitaHorarioService.delete(
      created.ID,
    )

    expect(deletedStatus).toBe(200)
  })

  it("create and read a receita horario", async () => {
    const { data: receita } = await createReceita()

    const { data: created } = await client.receitaHorarioService.create(
      FakeReceitaHorarioFactory.create({
        ReceitaID: receita.ID,
      }),
    )

    const { data: readed } = await client.receitaHorarioService.getById(
      created.ID,
    )

    expect(readed.ReceitaID).toBe(created.ReceitaID)
  })

  it("read all receita horarios", async () => {
    const { status } = await client.receitaHorarioService.getAll()

    expect(status).toBe(200)
  })
})
