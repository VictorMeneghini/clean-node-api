import { Router } from 'express'
import { makeSignUpController } from '../factories/signup'
import { adapterRoute } from '../adapters/express-route-adapter'

export default async (router: Router): Promise<void> => {
  router.post('/signup', await adapterRoute(makeSignUpController()))
}
