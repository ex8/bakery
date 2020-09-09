import { IOrderItem, OrderStatusType, IReceipt } from '@bakery/soil-api'

export interface IOrderFilterDto {
  items: IOrderItem[]
  pickupDateTime: string
  status: OrderStatusType
  receipt: IReceipt
  createdAt: string
  updatedAt: string
}

export interface IOrderCreateDto {
  items: IOrderItem[]
  pickupDateTime: string
  status: OrderStatusType
  receipt: IReceipt
}

export interface IOrderUpdateDto {
  items?: IOrderItem[]
  pickupDateTime?: string
  status?: OrderStatusType
  receipt?: IReceipt
}
