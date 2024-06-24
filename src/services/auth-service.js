import axios from "axios"
import { AuthLogin } from "../models/auth/auth-login.js"
import { AuthRegister } from "../models/auth/auth-register.js"
import { AuthResponse } from "../models/auth/auth-response.js"
import { ServiceResponse } from "../models/service-response.js"
import { Service } from "./service.js"

export class AuthService extends Service {
  /** @param {import("./service.js").ServiceConstructorProps} values  */
  constructor(values) {
    super(values)
  }

  /**
   * @param {AuthLogin} credentials
   * @returns {Promise<ServiceResponse<AuthResponse>>}
   */
  async login(credentials) {
    const fetchResult = await this.fetcher({
      method: "POST",
      url: `${this.basePath}/auth/login`,
      data: credentials,
    })

    return ServiceResponse.ParseFetch(fetchResult, new AuthResponse())
  }

  /**
   * @param {AuthRegister} credentials
   * @returns {Promise<ServiceResponse<AuthResponse>>}
   */
  async register(credentials) {
    const fetchResult = await this.fetcher({
      method: "POST",
      url: `${this.basePath}/auth/register`,
      data: credentials,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(fetchResult, new AuthResponse())
  }
}
