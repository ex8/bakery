import { IRoute, HttpMethod, toRouter, IOrder } from '@bakery/soil-api'
import { Context } from 'koa'
import { DaoFactory } from '../../dao'
import { isAuthenticated } from '../../util'

const Factory = new DaoFactory()

const routes: IRoute[] = [
  {
    path: '/orders',
    method: HttpMethod.GET,
    middlewares: [isAuthenticated('admin')],
    handler: async (ctx: Context): Promise<void> => {
      const orders: IOrder[] = await Factory.getOrderDao().find()
      if (!orders) {
        return ctx.throw(400, new Error('no orders found'))
      }
      ctx.status = 200
      ctx.body = { orders }
    },
  },
  {
    path: '/orders',
    method: HttpMethod.POST,
    middlewares: [],
    handler: async (ctx: Context): Promise<void> => {
      const { body } = ctx.request
      if (!body) {
        return ctx.throw(400, new Error('no body found'))
      }
      const order: IOrder = await Factory.getOrderDao().create(body)
      ctx.status = 201
      ctx.body = { order }
    },
  },
  {
    path: '/orders/:id',
    method: HttpMethod.GET,
    middlewares: [isAuthenticated('admin')],
    handler: async (ctx: Context): Promise<void> => {
      const { id } = ctx.params
      const order: IOrder = await Factory.getOrderDao().findOne({ id })
      if (!order) {
        return ctx.throw(400, new Error(`no order found ${id}`))
      }
      ctx.status = 200
      ctx.body = { order }
    },
  },
  {
    path: '/orders/:id',
    method: HttpMethod.PUT,
    middlewares: [isAuthenticated('admin')],
    handler: async (ctx: Context): Promise<void> => {
      const { id } = ctx.params
      const { body } = ctx.request
      if (!body) {
        return ctx.throw(new Error('no body found'))
      }
      const order: IOrder = await Factory.getOrderDao().update(id, body)
      if (!order) {
        return ctx.throw(400, new Error(`no order found ${id}`))
      }
      ctx.status = 200
      ctx.body = { order }
    },
  },
  {
    path: '/orders/:id',
    method: HttpMethod.DELETE,
    middlewares: [isAuthenticated('admin')],
    handler: async (ctx: Context): Promise<void> => {
      const { id } = ctx.params
      const order: IOrder = await Factory.getOrderDao().remove(id)
      ctx.status = 200
      ctx.body = { order }
    },
  },
]

export const OrderRouter = toRouter(routes)
