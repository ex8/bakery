import { Document } from 'mongoose'
import { IProduct } from './IProduct'
import { IReceipt } from './IReceipt'

export type OrderStatusType = 'COMPLETED' | 'BAKING' | 'PENDING' | 'CANCELLED' | 'TERMINATED'

export interface IOrder extends Document {
  items: IOrderItem[]
  pickupDateTime: string
  status: OrderStatusType
  receipt: IReceipt
  createdAt: string
  updatedAt: string
}

export interface IOrderItem extends Document {
  quantity: number
  product: IProduct
  createdAt: string
  updatedAt: string
}
