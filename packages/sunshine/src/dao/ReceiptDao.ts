import { IReceipt, IDao } from '@bakery/soil-api'
import { FilterQuery } from 'mongoose'
import { Receipt } from '../models'
import { IReceiptFilterDto, IReceiptCreateDto, IReceiptUpdateDto } from '../dto'

export class ReceiptDao implements IDao<IReceipt, IReceiptFilterDto, IReceiptCreateDto, IReceiptUpdateDto> {
  public async find(filter?: FilterQuery<IReceiptFilterDto>): Promise<IReceipt[]> {
    return Receipt.find(filter)
  }

  public async findOne(filter?: FilterQuery<IReceiptFilterDto>): Promise<IReceipt> {
    return Receipt.findOne(filter)
  }

  public async create(entity: IReceiptCreateDto): Promise<IReceipt> {
    return Receipt.create(entity)
  }

  public async update(id: string, entity: IReceiptUpdateDto): Promise<IReceipt> {
    return Receipt.findByIdAndUpdate(id, entity)
  }

  public async remove(id: string): Promise<IReceipt> {
    return Receipt.findByIdAndDelete(id)
  }
}
