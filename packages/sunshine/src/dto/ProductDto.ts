import { IAdmin } from '@bakery/soil-api'

export interface IProductFilterDto {
  title: string
  description: string
  price: number
  public: boolean
  admin: IAdmin
  createdAt: string
  updatedAt: string
}

export interface IProductCreateDto {
  title: string
  description: string
  images: string[]
  price: number
  public: boolean
  admin: IAdmin
}

export interface IProductUpdateDto {
  title?: string
  description?: string
  images?: string[]
  price?: number
  public?: boolean
}
