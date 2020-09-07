import { IReceipt, ReceiptStatusType, ReceiptMethodType, IOrder } from '@bakery/soil-api'

export interface IReceiptFilterDto extends IReceipt {
  method: ReceiptMethodType
  amount: number
  transactionId: string
  status: ReceiptStatusType
  order: IOrder
  createdAt: string
  updatedAt: string
}

export interface IReceiptCreateDto extends IReceipt {
  method: ReceiptMethodType
  amount: number
  status: ReceiptStatusType
  order: IOrder
}

export interface IReceiptUpdateDto extends IReceipt {
  method: ReceiptMethodType
  amount: number
  transactionId: string
  status: ReceiptStatusType
  order: IOrder
}
