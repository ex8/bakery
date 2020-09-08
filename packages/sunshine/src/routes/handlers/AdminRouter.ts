import { IRoute, HttpMethod, toRouter } from '@bakery/soil-api'
import { Context } from 'koa'
import { AdminDao } from '../../dao'
import { isAuthenticated } from '../../util'

const dao = new AdminDao()

const routes: IRoute[] = [
  {
    path: '/admins/:id',
    method: HttpMethod.GET,
    middlewares: [isAuthenticated('admin')],
    handler: async (ctx: Context): Promise<void> => {
      const { id } = ctx.params
      const admin = await dao.findOne({ id })
      if (!admin) {
        return ctx.throw(400, new Error('no admin found'))
      }
      ctx.status = 200
      ctx.body = { admin }
    },
  },
  {
    path: '/admins/:id',
    method: HttpMethod.PUT,
    middlewares: [isAuthenticated('admin')],
    handler: async (ctx: Context): Promise<void> => {
      const { id } = ctx.params
      const admin = await dao.update(id, ctx.request.body)
      if (!admin) {
        return ctx.throw(400, new Error('no admin found'))
      }
      ctx.status = 200
      ctx.body = { admin }
    },
  },
  {
    path: '/admins/:id',
    method: HttpMethod.DELETE,
    middlewares: [isAuthenticated('admin')],
    handler: async (ctx: Context): Promise<void> => {
      const { id } = ctx.params
      const admin = await dao.remove(id)
      if (!admin) {
        return ctx.throw(400, new Error('no admin found'))
      }
      ctx.status = 200
      ctx.body = { admin }
    },
  },
]

export const AdminRouter = toRouter(routes)
