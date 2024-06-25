import { faker } from "@faker-js/faker"
import { FakeEnderecoFactory } from "../../src/factories/fake-endereco.factory"
import { FakePacienteFactory } from "../../src/factories/fake-paciente.factory"
import { FakePrescricaoFactory } from "../../src/factories/fake-prescricao.factory"
import { FakeProdutoFactory } from "../../src/factories/fake-produto.factory"
import { FakeUnidadeFactory } from "../../src/factories/fake-unidade.factory"
import { FakeUserFactory } from "../../src/factories/fake-user.factory"
import DoseEmCasaClient from "../../src/main"

describe("produto service test", () => {
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

  it("create a new unidade", async () => {
    const { data: prescricao } = await createPrescricao()

    const { status } = await client.produtoService.create(
      FakeProdutoFactory.create({
        PrescricaoID: prescricao.ID,
      }),
    )

    expect(status).toBe(201)
  })

  it("create a new unidade and update", async () => {
    const { data: prescricao } = await createPrescricao()

    const { data: created } = await client.produtoService.create(
      FakeProdutoFactory.create({
        PrescricaoID: prescricao.ID,
      }),
    )

    const { status } = await client.produtoService.update(created.ID, {
      ...created,
      Nome: faker.company.name(),
    })

    expect(status).toBe(200)
  })

  it("create a new unidade and delete", async () => {
    const { data: prescricao } = await createPrescricao()

    const { data: created } = await client.produtoService.create(
      FakeProdutoFactory.create({ PrescricaoID: prescricao.ID }),
    )

    client.produtoService.delete(created.ID)
  })

  it("create and read a unidade", async () => {
    const { data: prescricao } = await createPrescricao()

    const { data: created } = await client.produtoService.create(
      FakeProdutoFactory.create({ PrescricaoID: prescricao.ID }),
    )

    const { data: readed } = await client.produtoService.getById(created.ID)

    expect(readed.Nome).toBe(created.Nome)
  })

  it("read all unidades", async () => {
    const { status } = await client.produtoService.getAll()

    expect(status).toBe(200)
  })
})
