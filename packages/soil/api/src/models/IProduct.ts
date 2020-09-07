import { Document } from 'mongoose'
import { IAdmin } from './IAdmin'

export interface IProduct extends Document {
  title: string,
  description: string,
  images: string[],
  price: number,
  public: boolean,
  admin: IAdmin
  createdAt: string
  updatedAt: string
}
