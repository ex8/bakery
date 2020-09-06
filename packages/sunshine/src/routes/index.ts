import { Middleware } from 'koa'
import compose from 'koa-compose'
import Router from '@koa/router'

const definitions: Router[] = []

export default function routes(): Middleware {
  const api = new Router({ prefix: '/api' })
  for (const router of definitions) {
    api.use(router.routes(), router.allowedMethods())
  }
  return compose([api.routes(), api.allowedMethods()])
}
