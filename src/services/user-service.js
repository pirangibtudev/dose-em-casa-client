import { ServiceResponse } from "../models/service-response"
import { User } from "../models/user/user"
import { UserUpdate } from "../models/user/user-update"
import { Service } from "./service"

export class UserService extends Service {
  /** @param {import("./service.js").ServiceConstructorProps} values  */
  constructor(values) {
    super(values)
  }

  /** @param {UserUpdate} values  */
  async update(values) {
    const result = await this.fetcher({
      method: "PUT",
      url: `${this.basePath}/users`,
      data: values,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(result, new User())
  }
}
