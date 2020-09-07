import { FilterQuery } from 'mongoose'

export interface IDao<T, F, C, U> {
  find: (filter?: FilterQuery<F>) => Promise<T[]>
  findOne: (filter?: FilterQuery<F>) => Promise<T>
  create: (entity: C) => Promise<T>
  update: (id: string, entity: U) => Promise<T>
  remove: (id: string) => Promise<T>
}
