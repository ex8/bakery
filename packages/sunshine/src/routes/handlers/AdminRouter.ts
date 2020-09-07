import { IRoute, HttpMethod, toRouter } from '@bakery/soil-api'
import { Context } from 'koa'
import { AdminDao } from '../../dao'

const dao = new AdminDao()

const routes: IRoute[] = [
  {
    path: '/admins/:id',
    method: HttpMethod.GET,
    middlewares: [],
    handler: async (ctx: Context): Promise<void> => {
      const { id } = ctx.params
      const admin = dao.findOne({ id })
      if (!admin) {
        return ctx.throw(new Error('no admin found'))
      }
      ctx.status = 200
      ctx.body = { admin }
    },
  },
  {
    path: '/admins/:id',
    method: HttpMethod.PUT,
    middlewares: [],
    handler: async (ctx: Context): Promise<void> => {
      const { id } = ctx.params
      const admin = dao.update(id, ctx.request.body)
      if (!admin) {
        return ctx.throw(new Error('no admin found'))
      }
      ctx.status = 200
      ctx.body = { admin }
    },
  },
  {
    path: '/admins/:id',
    method: HttpMethod.DELETE,
    middlewares: [],
    handler: async (ctx: Context): Promise<void> => {
      const { id } = ctx.params
      const admin = dao.remove(id)
      if (!admin) {
        return ctx.throw(new Error('no admin found'))
      }
      ctx.status = 200
      ctx.body = { admin }
    },
  },
]

export const AdminRouter = toRouter(routes)
