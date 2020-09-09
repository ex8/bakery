import { IOrder } from '@bakery/soil-api'
import { Order, OrderItem, Receipt } from '../../../src/models'
import { OrderDao } from '../../../src/dao'

interface IMock {
  find: jest.SpyInstance
  findOne: jest.SpyInstance
  create: jest.SpyInstance
  findByIdAndUpdate: jest.SpyInstance
  findByIdAndDelete: jest.SpyInstance
}

describe('OrderDao', () => {
  let mocks: IMock
  const dao: OrderDao = new OrderDao()
  const orders: IOrder[] = [new Order(), new Order()]

  beforeAll(() => {
    mocks = {
      find: jest.spyOn(Order, 'find').mockResolvedValueOnce(orders),
      findOne: jest.spyOn(Order, 'findOne').mockResolvedValueOnce(orders[0]),
      create: jest.spyOn(Order, 'create').mockResolvedValueOnce(orders[1]),
      findByIdAndUpdate: jest.spyOn(Order, 'findByIdAndUpdate').mockResolvedValueOnce(orders[0]),
      findByIdAndDelete: jest.spyOn(Order, 'findByIdAndDelete').mockResolvedValueOnce(orders[1]),
    }
  })

  test('should find Orders', async () => {
    const res: IOrder[] = await dao.find({})
    expect(mocks.find).toHaveBeenCalledTimes(1)
    expect(mocks.find).toHaveBeenCalledWith({})
    expect(res).toEqual(orders)
  })

  test('should find one Order', async () => {
    const res: IOrder = await dao.findOne({ id: 'some-id' })
    expect(mocks.findOne).toHaveBeenCalledTimes(1)
    expect(mocks.findOne).toHaveBeenCalledWith({ id: 'some-id' })
    expect(res).toEqual(orders[0])
  })

  test('should create Order', async () => {
    const res: IOrder = await dao.create({
      items: [new OrderItem(), new OrderItem()],
      pickupDateTime: Date.now().toString(),
      status: 'BAKING',
      receipt: new Receipt(),
    })
    expect(mocks.create).toHaveBeenCalledTimes(1)
    expect(res).toEqual(orders[1])
  })

  test('should update Order', async () => {
    const res: IOrder = await dao.update('some-id', { status: 'COMPLETED' })
    expect(mocks.findByIdAndUpdate).toHaveBeenCalledTimes(1)
    expect(mocks.findByIdAndUpdate).toHaveBeenCalledWith('some-id', { status: 'COMPLETED' })
    expect(res).toEqual(orders[0])
  })

  test('should remove Order', async () => {
    const res: IOrder = await dao.remove('some-id')
    expect(mocks.findByIdAndDelete).toHaveBeenCalledTimes(1)
    expect(mocks.findByIdAndDelete).toHaveBeenCalledWith('some-id')
    expect(res).toEqual(orders[1])
  })

  afterAll(() => {
    jest.clearAllMocks()
  })
})
