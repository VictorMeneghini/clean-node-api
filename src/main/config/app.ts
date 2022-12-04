import express from 'express'
import setUpMiddlewares from './middlewares'

const app = express()

console.log(app)

setUpMiddlewares(app)

export default app
