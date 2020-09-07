import { Middleware, Context, DefaultState } from 'koa'
import Router from '@koa/router'

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

export interface IRoute {
  path: string
  method: HttpMethod
  middlewares: Middleware[]
  handler: (ctx: Context) => Promise<void>
}

export function toRouter(routes: IRoute[], prefix?: string): Router {
  const router = new Router<DefaultState, Context>({ prefix })
  for (const { method, path, middlewares, handler } of routes) {
    switch (method) {
      case 'GET':
        router.get(path, ...middlewares, handler)
        break
      case 'POST':
        router.post(path, ...middlewares, handler)
        break
      case 'PUT':
        router.put(path, ...middlewares, handler)
        break
      case 'DELETE':
        router.delete(path, ...middlewares, handler)
        break
      default:
        throw new Error(`unknown method type ${method}`)
    }
  }
  return router
}
