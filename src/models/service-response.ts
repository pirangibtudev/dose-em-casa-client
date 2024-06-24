import { AxiosResponse } from "axios"

export class ServiceResponse<T> {
  data!: T
  status!: number
  errorMessage?: string | null

  static ParseFetch<K>(
    fetchResult: AxiosResponse,
    model: K,
  ): ServiceResponse<K> {
    model

    const { data, status } = fetchResult

    const res = new ServiceResponse<K>()
    res.data = data
    res.status = status
    res.errorMessage = data

    return res
  }
}
