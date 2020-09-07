import { Schema, SchemaOptions, model, Model } from 'mongoose'
import { IProduct } from '@bakery/soil-api'

const opts: SchemaOptions = {
  timestamps: true,
}

const schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: [String],
  price: { type: Number, required: true },
  public: { type: Boolean, default: false },
  admin: {
    type: Schema.Types.ObjectId,
    ref: 'Admin',
    required: true,
  },
}, opts)

const Product: Model<IProduct> = model<IProduct>('Product', schema)

export { Product }
