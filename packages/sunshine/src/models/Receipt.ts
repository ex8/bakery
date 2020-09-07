import { Schema, Model, model, SchemaOptions } from 'mongoose'
import { IReceipt } from '@bakery/soil-api'

const opts: SchemaOptions = {
  timestamps: true,
}

const schema = new Schema({
  method: {
    type: String,
    enum: ['PayPal'],
    required: true,
  },
  amount: { type: Number, required: true },
  transactionId: { type: String, required: true },
  status: {
    type: String,
    required: false,
    enum: ['COMPLETED', 'PENDING', 'FALURE', 'CANCELLED'],
  },
  order: {
    type: Schema.Types.ObjectId,
    ref: 'Order',
    required: true,
  }
}, opts)

const Receipt: Model<IReceipt> = model<IReceipt>('Receipt', schema)

export { Receipt }
