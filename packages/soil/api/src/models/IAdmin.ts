import { Document } from 'mongoose'

export interface IAdmin extends Document {
  firstName: string
  lastName: string
  email: string
  password: string
  isEmailVerified: boolean
  createdAt: string
  updatedAt: string
}
