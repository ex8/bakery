import { IAdmin } from '@bakery/soil-api'
import { FilterQuery } from 'mongoose'
import { Admin } from '../models'
import { IAdminFilterDto, IAdminCreateDto, IAdminUpdateDto } from '../dto'

export class AdminDao {
  public async find(filter?: FilterQuery<IAdminFilterDto>): Promise<IAdmin[]> {
    return Admin.find(filter)
  }

  public async findOne(filter?: FilterQuery<IAdminFilterDto>): Promise<IAdmin> {
    return Admin.findOne(filter)
  }

  public async create(entity: IAdminCreateDto): Promise<IAdmin> {
    return Admin.create(entity)
  }

  public async update(id: string, entity: IAdminUpdateDto): Promise<IAdmin> {
    return Admin.findByIdAndUpdate(id, entity)
  }

  public async remove(id: string): Promise<IAdmin> {
    return Admin.findByIdAndDelete(id)
  }
}
