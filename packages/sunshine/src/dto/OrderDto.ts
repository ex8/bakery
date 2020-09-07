import { IOrder, IOrderItem, OrderStatusType, IReceipt } from '@bakery/soil-api'

export interface IOrderFilterDto extends IOrder {
  items: IOrderItem[]
  pickupDateTime: string
  status: OrderStatusType
  receipt: IReceipt
  createdAt: string
  updatedAt: string
}

export interface IOrderCreateDto extends IOrder {
  items: IOrderItem[]
  pickupDateTime: string
  status: OrderStatusType
  receipt: IReceipt
}

export interface IOrderUpdateDto extends IOrder {
  items: IOrderItem[]
  pickupDateTime: string
  status: OrderStatusType
  receipt: IReceipt
}
