/** @template T */
export class ServiceResponse {
  /** @type {T} */
  data
  /** @type {number} */
  status
  /** @type {string | null | undefined} */
  errorMessage

  /**
   * @template K
   * @param {import("axios").AxiosResponse} fetchResult
   * @param {K} model
   * @returns {ServiceResponse<K>}
   */
  static ParseFetch(fetchResult, model) {
    model

    const { data, status } = fetchResult

    const res = new ServiceResponse()
    res.data = data
    res.status = status
    res.errorMessage = data

    return res
  }
}
