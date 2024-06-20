/**
 * @typedef {Partial<{
 *  basePath: string,
 *  authorization: string
 * }>} ServiceConstructorProps
 */

import axios from "axios"
import { AxiosError } from "axios"

export class Service {
  /** @type {string} */
  #basePath = "http://localhost:3333"
  get basePath() {
    return this.#basePath
  }
  set basePath(value) {
    this.#basePath = value
  }

  /**
   * @type {string}
   *
   * @description Ex.: `Bearer RoLQY0ZK1aHIEl...`
   */
  #authorization
  get authorization() {
    return this.#authorization
  }
  set authorization(value) {
    this.#authorization = value
  }

  /** @param {ServiceConstructorProps} param0 */
  constructor({ basePath, authorization }) {
    this.basePath = basePath || this.basePath
    this.authorization = authorization || this.authorization
  }

  /**
   * @param {import("axios").AxiosRequestConfig<any>} axiosOptions
   * @returns {Promise<import("axios").AxiosResponse | null>}
   */
  async fetcher(axiosOptions) {
    try {
      const res = await axios(axiosOptions)

      return res
    } catch (err) {
      if (err instanceof AxiosError) {
        return err.response
      }
    }

    return null
  }
}
