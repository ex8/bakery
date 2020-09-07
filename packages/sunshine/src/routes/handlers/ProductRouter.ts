import { IRoute, HttpMethod, toRouter } from '@bakery/soil-api'
import { Context } from 'koa'
import { ProductDao } from '../../dao'

const dao = new ProductDao()

const routes: IRoute[] = [
  {
    path: '/products',
    method: HttpMethod.GET,
    middlewares: [],
    handler: async (ctx: Context): Promise<void> => {
      const products = await dao.find()
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
    middlewares: [],
    handler: async (ctx: Context): Promise<void> => {
      const { body } = ctx.request
      if (!body) {
        return ctx.throw(400, new Error('no body found'))
      }
      const product = await dao.create(body)
      ctx.status = 201
      ctx.body = { product }
    },
  },
  {
    path: '/products/:id',
    method: HttpMethod.GET,
    middlewares: [],
    handler: async (ctx: Context): Promise<void> => {
      const { id } = ctx.params
      const product = await dao.findOne({ id })
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
    middlewares: [],
    handler: async (ctx: Context): Promise<void> => {
      const { id } = ctx.params
      const { body } = ctx.request
      if (!body) {
        return ctx.throw(400, new Error('no body found'))
      }
      const product = await dao.update(id, body)
      ctx.status = 200
      ctx.body = { product }
    },
  },
  {
    path: '/products/:id',
    method: HttpMethod.DELETE,
    middlewares: [],
    handler: async (ctx: Context): Promise<void> => {
      const { id } = ctx.params
      const product = await dao.remove(id)
      ctx.status = 200
      ctx.body = { product }
    },
  },
]

export const ProductRouter = toRouter(routes)
