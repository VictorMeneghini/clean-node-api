import { Controller } from '../../presentation/protocols/controller'
import { Request, Response } from 'express'
import { HttpRequest } from '../../presentation/protocols/http'

export const adapterRoute = async (controller: Controller): Promise<any> => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }
    const httpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
