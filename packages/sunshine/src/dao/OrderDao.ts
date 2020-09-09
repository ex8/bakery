import { IOrder, IDao } from '@bakery/soil-api'
import { FilterQuery } from 'mongoose'
import { Order } from '../models'
import { IOrderFilterDto, IOrderCreateDto, IOrderUpdateDto } from '../dto'

export class OrderDao implements IDao<IOrder, IOrderFilterDto, IOrderCreateDto, IOrderUpdateDto> {
  public async find(filter?: FilterQuery<IOrderFilterDto>): Promise<IOrder[]> {
    return Order.find(filter)
  }

  public async findOne(filter?: FilterQuery<IOrderFilterDto>): Promise<IOrder> {
    return Order.findOne(filter)
  }

  public async create(entity: IOrderCreateDto): Promise<IOrder> {
    return Order.create(entity as IOrder)
  }

  public async update(id: string, entity: IOrderUpdateDto): Promise<IOrder> {
    return Order.findByIdAndUpdate(id, entity)
  }

  public async remove(id: string): Promise<IOrder> {
    return Order.findByIdAndDelete(id)
  }
}
