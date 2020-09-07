import { Middleware } from 'koa'
import compose from 'koa-compose'
import Router from '@koa/router'
import { AdminRouter, ProductRouter, OrderRouter, ReceiptRouter } from './handlers'

const definitions: Router[] = [
  AdminRouter,
  ProductRouter,
  OrderRouter,
  ReceiptRouter,
]

export default function routes(): Middleware {
  const api = new Router({ prefix: '/api' })
  for (const router of definitions) {
    api.use(router.routes(), router.allowedMethods())
  }
  return compose([api.routes(), api.allowedMethods()])
}
