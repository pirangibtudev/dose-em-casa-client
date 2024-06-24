import { User } from "../user/user"

export class AuthResponse {
  User!: User
  Token!: string
}
