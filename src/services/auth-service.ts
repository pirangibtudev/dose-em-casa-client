import axios from "axios"
import { AuthLogin } from "../models/auth/auth-login"
import { AuthRegister } from "../models/auth/auth-register"
import { AuthResponse } from "../models/auth/auth-response"
import { ServiceResponse } from "../models/service-response"
import { Service } from "./service"
import { ServiceConstructorProps } from "./service"

export class AuthService extends Service {
  constructor(values: ServiceConstructorProps) {
    super(values)
  }

  async login(credentials: AuthLogin): Promise<ServiceResponse<AuthResponse>> {
    const fetchResult = await this.fetcher({
      method: "POST",
      url: `${this.basePath}/auth/login`,
      data: credentials,
    })

    return ServiceResponse.ParseFetch(fetchResult!, new AuthResponse())
  }

  async register(
    credentials: AuthRegister,
  ): Promise<ServiceResponse<AuthResponse>> {
    const fetchResult = await this.fetcher({
      method: "POST",
      url: `${this.basePath}/auth/register`,
      data: credentials,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(fetchResult!, new AuthResponse())
  }

  async revalidate(): Promise<ServiceResponse<AuthResponse>> {
    const fetchResult = await this.fetcher({
      method: "POST",
      url: `${this.basePath}/auth/revalidate`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(fetchResult!, new AuthResponse())
  }
}
