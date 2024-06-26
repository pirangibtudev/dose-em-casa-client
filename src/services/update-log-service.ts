import { ServiceResponse } from "../models/service-response"
import { UpdateLog } from "../models/update-log/update-log"
import { Service, ServiceConstructorProps } from "./service"

export class UpdateLogService extends Service {
  constructor(values: ServiceConstructorProps) {
    super(values)
  }

  // async getAll(
  //   options?: Partial<GetAllOptions<UpdateLog>>,
  // ): Promise<ServiceResponse<UpdateLog[]>> {
  //   const res = await this.fetcher({
  //     method: "GET",
  //     url: `${this.basePath}/update-logs`,
  //     headers: { Authorization: this.authorization },
  //     params: { ...options },
  //   })

  //   return ServiceResponse.ParseFetch(res!, [new UpdateLog()])
  // }

  async getByIdAndTableName(
    id: number,
    table: string,
  ): Promise<ServiceResponse<UpdateLog[]>> {
    const res = await this.fetcher({
      method: "GET",
      url: `${this.basePath}/update_logs/${table}/${id}`,
      headers: { Authorization: this.authorization },
    })

    return ServiceResponse.ParseFetch(res!, [new UpdateLog()])
  }
}
