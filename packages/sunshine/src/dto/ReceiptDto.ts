import { ReceiptStatusType, ReceiptMethodType, IOrder } from '@bakery/soil-api'

export interface IReceiptFilterDto {
  method: ReceiptMethodType
  amount: number
  transactionId: string
  status: ReceiptStatusType
  order: IOrder
  createdAt: string
  updatedAt: string
}

export interface IReceiptCreateDto {
  method: ReceiptMethodType
  amount: number
  status: ReceiptStatusType
  order: IOrder
}

export interface IReceiptUpdateDto {
  method?: ReceiptMethodType
  amount?: number
  transactionId?: string
  status?: ReceiptStatusType
  order?: IOrder
}
