import { IRoute, HttpMethod, toRouter, IProduct } from '@bakery/soil-api'
import { Context } from 'koa'
import { DaoFactory } from '../../dao'
import { isAuthenticated } from '../../util'

const Factory = new DaoFactory()

const routes: IRoute[] = [
  {
    path: '/products',
    method: HttpMethod.GET,
    middlewares: [],
    handler: async (ctx: Context): Promise<void> => {
      const products: IProduct[] = await Factory.getProductDao().find()
      if (!products) {
        return ctx.throw(400, new Error('no products found'))
      }
      ctx.status = 200
      ctx.body = { products }
    },
  },
  {
    path: '/products',
    method: HttpMethod.POST,
    middlewares: [isAuthenticated('admin')],
    handler: async (ctx: Context): Promise<void> => {
      const { body } = ctx.request
      if (!body) {
        return ctx.throw(400, new Error('no body found'))
      }
      const product: IProduct = await Factory.getProductDao().create(body)
      ctx.status = 201
      ctx.body = { product }
    },
  },
  {
    path: '/products/:id',
    method: HttpMethod.GET,
    middlewares: [isAuthenticated('admin')],
    handler: async (ctx: Context): Promise<void> => {
      const { id } = ctx.params
      const product: IProduct = await Factory.getProductDao().findOne({ id })
      if (!product) {
        return ctx.throw(400, new Error(`no product found ${id}`))
      }
      ctx.status = 200
      ctx.body = { product }
    },
  },
  {
    path: '/products/:id',
    method: HttpMethod.PUT,
    middlewares: [isAuthenticated('admin')],
    handler: async (ctx: Context): Promise<void> => {
      const { id } = ctx.params
      const { body } = ctx.request
      if (!body) {
        return ctx.throw(400, new Error('no body found'))
      }
      const product: IProduct = await Factory.getProductDao().update(id, body)
      ctx.status = 200
      ctx.body = { product }
    },
  },
  {
    path: '/products/:id',
    method: HttpMethod.DELETE,
    middlewares: [isAuthenticated('admin')],
    handler: async (ctx: Context): Promise<void> => {
      const { id } = ctx.params
      const product: IProduct = await Factory.getProductDao().remove(id)
      ctx.status = 200
      ctx.body = { product }
    },
  },
]

export const ProductRouter = toRouter(routes)
