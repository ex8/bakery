import { Schema, Model, model, SchemaOptions } from 'mongoose'
import validator from 'validator'
import { IAdmin } from '@bakery/soil-api'

const opts: SchemaOptions = {
  timestamps: true,
}

const schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, 'Invalid e-mail address'],
  },
  password: { type: String, required: true },
  isEmailVerified: { type: Boolean, default: false, required: true },
}, opts)

const Admin: Model<IAdmin> = model<IAdmin>('Admin', schema)

export { Admin }
