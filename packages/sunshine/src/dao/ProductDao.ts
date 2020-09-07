import { IProduct, IDao } from '@bakery/soil-api'
import { FilterQuery } from 'mongoose'
import { Product } from '../models'
import { IProductFilterDto, IProductCreateDto, IProductUpdateDto } from '../dto'

export class ProductDao implements IDao<IProduct, IProductFilterDto, IProductCreateDto, IProductUpdateDto> {
  public async find(filter?: FilterQuery<IProductFilterDto>): Promise<IProduct[]> {
    return Product.find(filter)
  }

  public async findOne(filter?: FilterQuery<IProductFilterDto>): Promise<IProduct> {
    return Product.findOne(filter)
  }

  public async create(entity: IProductCreateDto): Promise<IProduct> {
    return Product.create(entity)
  }

  public async update(id: string, entity: IProductUpdateDto): Promise<IProduct> {
    return Product.findByIdAndUpdate(id, entity)
  }

  public async remove(id: string): Promise<IProduct> {
    return Product.findByIdAndDelete(id)
  }
}
