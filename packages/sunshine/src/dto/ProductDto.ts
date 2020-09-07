import { IProduct, IAdmin } from '@bakery/soil-api'

export interface IProductFilterDto extends IProduct {
  title: string
  description: string
  price: number
  public: boolean
  admin: IAdmin
  createdAt: string
  updatedAt: string
}

export interface IProductCreateDto extends IProduct {
  title: string
  description: string
  images: string[]
  price: number
  public: boolean
  admin: IAdmin
}

export interface IProductUpdateDto extends IProduct {
  title: string
  description: string
  images: string[]
  price: number
  public: boolean
  admin: IAdmin
}
