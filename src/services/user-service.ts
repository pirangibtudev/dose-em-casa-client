import { ServiceResponse } from "../models/service-response"
import { User } from "../models/user/user"
import { UserUpdate } from "../models/user/user-update"
import { Service, ServiceConstructorProps } from "./service"

export class UserService extends Service {
  constructor(values: ServiceConstructorProps) {
    super(values)
  }

  async update(values: UserUpdate): Promise<ServiceResponse<User>> {
    const result = await this.fetcher({
      method: "PUT",
      url: `${this.basePath}/users`,
      data: values,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(result!, new User())
  }
}
