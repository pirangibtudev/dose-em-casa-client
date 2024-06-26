import { Entity } from "../entity"

export class UpdateLog extends Entity {
  Table!: string
  ItemID!: number
  Backup!: string
}
