import { HttpResponse } from '../protocols/http'

export const badRequest = (error: Error): HttpResponse => {
  console.log(error)
  return {
    statusCode: 400,
    body: error
  }
}
