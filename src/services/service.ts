export type ServiceConstructorProps = Partial<{
  basePath: string
  authorization: string
}>

import axios from "axios"
import { AxiosError } from "axios"

export class Service {
  #basePath = "http://localhost:3333"
  get basePath() {
    return this.#basePath
  }
  set basePath(value) {
    this.#basePath = value
  }

  /**
   * @description Ex.: `Bearer RoLQY0ZK1aHIEl...`
   */
  #authorization: string = ""
  get authorization() {
    return this.#authorization
  }
  set authorization(value) {
    this.#authorization = value
  }

  constructor({ basePath, authorization }: ServiceConstructorProps) {
    this.basePath = basePath || this.basePath
    this.authorization = authorization || this.authorization
  }

  async fetcher(
    axiosOptions: import("axios").AxiosRequestConfig<any>,
  ): Promise<import("axios").AxiosResponse | null> {
    try {
      const res = await axios(axiosOptions)

      return res
    } catch (err) {
      if (err instanceof AxiosError) {
        return err.response || null
      }
    }

    return null
  }
}
