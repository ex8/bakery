import { IAdmin } from '@bakery/soil-api'
import { Admin } from '../../../src/models'
import { AdminDao } from '../../../src/dao'

interface IMock {
  find: jest.SpyInstance
  findOne: jest.SpyInstance
  create: jest.SpyInstance
  findByIdAndUpdate: jest.SpyInstance
  findByIdAndDelete: jest.SpyInstance
}

describe('AdminDao', () => {
  let mocks: IMock
  const dao: AdminDao = new AdminDao()
  const admins: IAdmin[] = [new Admin(), new Admin()]

  beforeAll(() => {
    mocks = {
      find: jest.spyOn(Admin, 'find').mockResolvedValueOnce(admins),
      findOne: jest.spyOn(Admin, 'findOne').mockResolvedValueOnce(admins[0]),
      create: jest.spyOn(Admin, 'create').mockResolvedValueOnce(admins[1]),
      findByIdAndUpdate: jest.spyOn(Admin, 'findByIdAndUpdate').mockResolvedValueOnce(admins[0]),
      findByIdAndDelete: jest.spyOn(Admin, 'findByIdAndDelete').mockResolvedValueOnce(admins[1]),
    }
  })

  test('should find Admins', async () => {
    const res: IAdmin[] = await dao.find({})
    expect(mocks.find).toHaveBeenCalledTimes(1)
    expect(mocks.find).toHaveBeenCalledWith({})
    expect(res).toEqual(admins)
  })

  test('should find one Admin', async () => {
    const res: IAdmin = await dao.findOne({ id: 'some-id' })
    expect(mocks.findOne).toHaveBeenCalledTimes(1)
    expect(mocks.findOne).toHaveBeenCalledWith({ id: 'some-id' })
    expect(res).toEqual(admins[0])
  })

  test('should create Admin', async () => {
    const res: IAdmin = await dao.create({
      firstName: 'some-first',
      lastName: 'some-last',
      email: 'some-email',
      password: 'some-password',
    })
    expect(mocks.create).toHaveBeenCalledTimes(1)
    expect(mocks.create).toHaveBeenCalledWith({
      firstName: 'some-first',
      lastName: 'some-last',
      email: 'some-email',
      password: 'some-password',
    })
    expect(res).toEqual(admins[1])
  })

  test('should update Admin', async () => {
    const res: IAdmin = await dao.update('some-id', {
      isEmailVerified: false,
    })
    expect(mocks.findByIdAndUpdate).toHaveBeenCalledTimes(1)
    expect(mocks.findByIdAndUpdate).toHaveBeenCalledWith('some-id', {
      isEmailVerified: false,
    })
    expect(res).toEqual(admins[0])
  })

  test('should remove Admin', async () => {
    const res: IAdmin = await dao.remove('some-id')
    expect(mocks.findByIdAndDelete).toHaveBeenCalledTimes(1)
    expect(mocks.findByIdAndDelete).toHaveBeenCalledWith('some-id')
    expect(res).toEqual(admins[1])
  })

  afterAll(() => {
    jest.clearAllMocks()
  })
})
