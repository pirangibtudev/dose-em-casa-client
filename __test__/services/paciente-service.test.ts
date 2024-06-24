import { faker } from "@faker-js/faker"
import { FakePacienteFactory } from "../../src/factories/fake-paciente.factory"
import { FakeUserFactory } from "../../src/factories/fake-user.factory"
import { AuthService } from "../../src/main"
import { PacienteService } from "../../src/services/paciente-service"
import { UnidadeService } from "../../src/services/unidade-service"
import { EnderecoService } from "../../src/services/endereco-service"
import { FakeUnidadeFactory } from "../../src/factories/fake-unidade.factory"
import { FakeEnderecoFactory } from "../../src/factories/fake-endereco.factory"

describe("paciente service test", () => {
  let authService!: AuthService
  let pacienteService!: PacienteService
  let unidadeService!: UnidadeService
  let enderecoService!: EnderecoService

  beforeAll(async () => {
    authService = new AuthService({})
    pacienteService = new PacienteService({})
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
    unidadeService.authorization = `Bearer ${data.Token}`
    enderecoService.authorization = `Bearer ${data.Token}`
  })

  it("create a new paciente", async () => {
    const insertData = FakePacienteFactory.create()

    const unidade1 = await unidadeService.create(FakeUnidadeFactory.create())
    const unidade2 = await unidadeService.create(FakeUnidadeFactory.create())
    const endereco1 = await enderecoService.create(FakeEnderecoFactory.create())
    const endereco2 = await enderecoService.create(FakeEnderecoFactory.create())

    insertData.UnidadeReferenciaID = unidade1.data.ID
    insertData.UnidadeSaudeID = unidade2.data.ID
    insertData.EnderecoEntregaID = endereco1.data.ID
    insertData.EnderecoResidenciaID = endereco2.data.ID

    const { status } = await pacienteService.create(insertData)

    expect(status).toBe(201)
  })

  it("create a new paciente and update", async () => {
    const insertData = FakePacienteFactory.create()

    const unidade1 = await unidadeService.create(FakeUnidadeFactory.create())
    const unidade2 = await unidadeService.create(FakeUnidadeFactory.create())
    const endereco1 = await enderecoService.create(FakeEnderecoFactory.create())
    const endereco2 = await enderecoService.create(FakeEnderecoFactory.create())

    insertData.UnidadeReferenciaID = unidade1.data.ID
    insertData.UnidadeSaudeID = unidade2.data.ID
    insertData.EnderecoEntregaID = endereco1.data.ID
    insertData.EnderecoResidenciaID = endereco2.data.ID

    const { data: created } = await pacienteService.create(insertData)

    const { status } = await pacienteService.update(created.ID, {
      ...created,
      Nome: faker.person.fullName(),
      Alfabetizado: faker.datatype.boolean(),
    })

    expect(status).toBe(200)
  })

  it("create a new paciente and delete", async () => {
    const insertData = FakePacienteFactory.create()

    const unidade1 = await unidadeService.create(FakeUnidadeFactory.create())
    const unidade2 = await unidadeService.create(FakeUnidadeFactory.create())
    const endereco1 = await enderecoService.create(FakeEnderecoFactory.create())
    const endereco2 = await enderecoService.create(FakeEnderecoFactory.create())

    insertData.UnidadeReferenciaID = unidade1.data.ID
    insertData.UnidadeSaudeID = unidade2.data.ID
    insertData.EnderecoEntregaID = endereco1.data.ID
    insertData.EnderecoResidenciaID = endereco2.data.ID

    const { data: created } = await pacienteService.create(insertData)

    const { status } = await pacienteService.delete(created.ID)

    expect(status).toBe(200)
  })

  it("create and read a paciente", async () => {
    const insertData = FakePacienteFactory.create()

    const unidade1 = await unidadeService.create(FakeUnidadeFactory.create())
    const unidade2 = await unidadeService.create(FakeUnidadeFactory.create())
    const endereco1 = await enderecoService.create(FakeEnderecoFactory.create())
    const endereco2 = await enderecoService.create(FakeEnderecoFactory.create())

    insertData.UnidadeReferenciaID = unidade1.data.ID
    insertData.UnidadeSaudeID = unidade2.data.ID
    insertData.EnderecoEntregaID = endereco1.data.ID
    insertData.EnderecoResidenciaID = endereco2.data.ID

    const { data: created } = await pacienteService.create(insertData)

    const { data: readed } = await pacienteService.getById(created.ID)

    expect(readed.Nome).toBe(created.Nome)
  })

  it("read all pacientes", async () => {
    const { status } = await pacienteService.getAll()

    expect(status).toBe(200)
  })
})
