import { Document } from 'mongoose'
import { IOrder } from './IOrder'

export type ReceiptMethodType = 'PayPal'
export type ReceiptStatusType = 'COMPLETED' | 'PENDING' | 'FALURE' | 'CANCELLED'

export interface IReceipt extends Document {
  method: ReceiptMethodType
  amount: number
  transactionId: string
  status: ReceiptStatusType
  order: IOrder
  createdAt: string
  updatedAt: string
}
