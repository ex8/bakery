import { Schema, Model, model, SchemaOptions } from 'mongoose'
import { IOrder, IOrderItem } from '@bakery/soil-api'

const opts: SchemaOptions = {
  timestamps: true,
}

const item = new Schema({
  quantity: { type: Number, required: true },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  }
}, opts)

const order = new Schema({
  items: [item],
  pickupDateTime: { type: Date, required: true },
  status: {
    type: String,
    enum: ['COMPLETED', 'BAKING', 'PENDING', 'CANCELLED', 'TERMINATED'],
  },
  receipt: {
    type: Schema.Types.ObjectId,
    ref: 'Receipt',
  }
}, opts)

const Order: Model<IOrder> = model<IOrder>('Order', order)
const OrderItem: Model<IOrderItem> = model<IOrderItem>('OrderItem', item)

export { Order, OrderItem }
