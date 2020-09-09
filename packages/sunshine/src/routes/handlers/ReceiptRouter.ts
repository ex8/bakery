import { IRoute, HttpMethod, toRouter } from '@bakery/soil-api'
import { Context } from 'koa'
import { ReceiptDao } from '../../dao'
import { isAuthenticated } from '../../util'

const dao = new ReceiptDao()

const routes: IRoute[] = [
  {
    path: '/receipts',
    method: HttpMethod.GET,
    middlewares: [isAuthenticated('admin')],
    handler: async (ctx: Context): Promise<void> => {
      const receipts = await dao.find()
      if (!receipts) {
        return ctx.throw(400, { success: false, message: 'no receipts found' })
      }
      ctx.status = 200
      ctx.body = { receipts }
    },
  },
  {
    path: '/receipts',
    method: HttpMethod.POST,
    middlewares: [isAuthenticated('admin')],
    handler: async (ctx: Context): Promise<void> => {
      const { body } = ctx.request
      if (!body) {
        return ctx.throw(400, { success: false, message: 'no body found' })
      }
      const receipt = await dao.create(body)
      ctx.status = 201
      ctx.body = { receipt }
    },
  },
  {
    path: '/receipts/:id',
    method: HttpMethod.GET,
    middlewares: [isAuthenticated('admin')],
    handler: async (ctx: Context): Promise<void> => {
      const { id } = ctx.params
      const receipt = await dao.findOne({ id })
      if (!receipt) {
        return ctx.throw(400, { success: false, message: `no receipt found ${id}` })
      }
      ctx.status = 200
      ctx.body = { receipt }
    },
  },
  {
    path: '/receipts/:id',
    method: HttpMethod.PUT,
    middlewares: [isAuthenticated('admin')],
    handler: async (ctx: Context): Promise<void> => {
      const { id } = ctx.params
      const { body } = ctx.request
      if (!body) {
        return ctx.throw(400, { success: false, message: 'no body found' })
      }
      const receipt = await dao.update(id, body)
      if (!receipt) {
        return ctx.throw(400, { success: false, message: `no receipt found ${id}` })
      }
      ctx.status = 200
      ctx.body = { receipt }
    },
  },
  {
    path: '/receipts/:id',
    method: HttpMethod.DELETE,
    middlewares: [isAuthenticated('admin')],
    handler: async (ctx: Context): Promise<void> => {
      const { id } = ctx.params
      const receipt = await dao.remove(id)
      ctx.status = 200
      ctx.body = { receipt }
    },
  },
]

export const ReceiptRouter = toRouter(routes)
