import { IAdmin } from '@bakery/soil-api'

export interface IAdminFilterDto extends IAdmin {
  firstName: string
  lastName: string
  email: string
  isEmailVerified: boolean
  createdAt: string
  updatedAt: string
}

export interface IAdminCreateDto extends IAdmin {
  firstName: string
  lastName: string
  email: string
  password: string
  isEmailVerified: boolean
}

export interface IAdminUpdateDto extends IAdmin {
  firstName: string
  lastName: string
  password: string
  isEmailVerified: boolean
}
