import { faker } from "@faker-js/faker"
import { FakeItemEntregaFactory } from "../../src/factories/fake-item-entrega.factory"
import { FakePacienteFactory } from "../../src/factories/fake-paciente.factory"
import { FakeUserFactory } from "../../src/factories/fake-user.factory"
import {
  PacienteService,
  AuthService,
  UnidadeService,
  EnderecoService,
} from "../../src/main"
import { ItemEntregaService } from "../../src/services/item-entrega-service"
import { FakeUnidadeFactory } from "../../src/factories/fake-unidade.factory"
import { FakeEnderecoFactory } from "../../src/factories/fake-endereco.factory"

describe("item entrega service test", () => {
  /** @type {AuthService} */
  let authService
  /** @type {ItemEntregaService} */
  let itemEntregaService
  /** @type {PacienteService} */
  let pacienteService
  /** @type {UnidadeService} */
  let unidadeService
  /** @type {EnderecoService} */
  let enderecoService

  beforeAll(async () => {
    authService = new AuthService({})
    pacienteService = new PacienteService({})
    itemEntregaService = new ItemEntregaService({})
    unidadeService = new UnidadeService({})
    enderecoService = new EnderecoService({})

    const usr = FakeUserFactory.create()

    const { data: admin } = await authService.login({
      Username: "admin",
      Password: "admin@1234",
    })
    authService.authorization = `Bearer ${admin.Token}`

    const { data } = await authService.register(usr)
    authService.authorization = `Bearer ${data.Token}`
    pacienteService.authorization = `Bearer ${data.Token}`
    itemEntregaService.authorization = `Bearer ${data.Token}`
    unidadeService.authorization = `Bearer ${data.Token}`
    enderecoService.authorization = `Bearer ${data.Token}`
  })

  async function genPaciente() {
    const paciente = FakePacienteFactory.create()

    const unidade1 = await unidadeService.create(FakeUnidadeFactory.create())
    const unidade2 = await unidadeService.create(FakeUnidadeFactory.create())
    const endereco1 = await enderecoService.create(FakeEnderecoFactory.create())
    const endereco2 = await enderecoService.create(FakeEnderecoFactory.create())

    paciente.UnidadeReferenciaID = unidade1.data.ID
    paciente.UnidadeSaudeID = unidade2.data.ID
    paciente.EnderecoEntregaID = endereco1.data.ID
    paciente.EnderecoResidenciaID = endereco2.data.ID

    return paciente
  }

  it("create a new item entrega", async () => {
    const insertData = FakeItemEntregaFactory.create()

    const paciente = await pacienteService.create(await genPaciente())
    insertData.PacienteID = paciente.data.ID

    const { status } = await itemEntregaService.create(insertData)

    expect(status).toBe(201)
  })

  it("create a new item entrega and update", async () => {
    const insertData = FakeItemEntregaFactory.create()

    const paciente = await pacienteService.create(await genPaciente())
    insertData.PacienteID = paciente.data.ID

    const { data: created } = await itemEntregaService.create(insertData)

    const { status } = await itemEntregaService.update(created.ID, {
      ...created,
      Nome: faker.person.fullName(),
    })

    expect(status).toBe(200)
  })

  it("create a new item entrega and delete", async () => {
    const insertData = FakeItemEntregaFactory.create()

    const paciente = await pacienteService.create(await genPaciente())
    insertData.PacienteID = paciente.data.ID

    const { data: created } = await itemEntregaService.create(insertData)

    const { status } = await itemEntregaService.delete(created.ID)

    expect(status).toBe(200)
  })

  it("create and read a item entrega", async () => {
    const insertData = FakeItemEntregaFactory.create()

    const paciente = await pacienteService.create(await genPaciente())
    insertData.PacienteID = paciente.data.ID

    const { data: created } = await itemEntregaService.create(insertData)

    const { data: readed } = await itemEntregaService.getById(created.ID)

    expect(readed.Nome).toBe(created.Nome)
  })

  it("read all item entregas", async () => {
    const { status } = await itemEntregaService.getAll()

    expect(status).toBe(200)
  })
})
