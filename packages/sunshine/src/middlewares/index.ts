import { Middleware } from 'koa'
import compose from 'koa-compose'
import logger from 'koa-pino-logger'
import helmet from 'koa-helmet'
import cors from '@koa/cors'
import body from 'koa-body'

export default function middlewares(): Middleware {
  return compose([
    logger({ prettyPrint: true }),
    helmet(),
    cors(),
    body(),
  ])
}
