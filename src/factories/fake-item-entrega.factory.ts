import { faker } from "@faker-js/faker"
import { ItemEntrega } from "../models/item-entrega/item-entrega"

export class FakeItemEntregaFactory {
  static create() {
    const itemEntrega = new ItemEntrega()
    itemEntrega.Nome = faker.person.fullName()

    return itemEntrega
  }
}
