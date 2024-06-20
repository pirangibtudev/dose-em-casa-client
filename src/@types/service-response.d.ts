export type ServiceResponse<M> = {
  data: M
  status: number
  errorMessage?: string | null
}
