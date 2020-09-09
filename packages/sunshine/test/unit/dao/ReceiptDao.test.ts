import { IReceipt } from '@bakery/soil-api'
import { Receipt, Order } from '../../../src/models'
import { ReceiptDao } from '../../../src/dao'

interface IMock {
  find: jest.SpyInstance
  findOne: jest.SpyInstance
  create: jest.SpyInstance
  findByIdAndUpdate: jest.SpyInstance
  findByIdAndDelete: jest.SpyInstance
}

describe('ReceiptDao', () => {
  let mocks: IMock
  const dao: ReceiptDao = new ReceiptDao()
  const receipts: IReceipt[] = [new Receipt(), new Receipt()]

  beforeAll(() => {
    mocks = {
      find: jest.spyOn(Receipt, 'find').mockResolvedValueOnce(receipts),
      findOne: jest.spyOn(Receipt, 'findOne').mockResolvedValueOnce(receipts[0]),
      create: jest.spyOn(Receipt, 'create').mockResolvedValueOnce(receipts[1]),
      findByIdAndUpdate: jest.spyOn(Receipt, 'findByIdAndUpdate').mockResolvedValueOnce(receipts[0]),
      findByIdAndDelete: jest.spyOn(Receipt, 'findByIdAndDelete').mockResolvedValueOnce(receipts[1]),
    }
  })

  test('should find Receipts', async () => {
    const res: IReceipt[] = await dao.find({})
    expect(mocks.find).toHaveBeenCalledTimes(1)
    expect(mocks.find).toHaveBeenCalledWith({})
    expect(res).toEqual(receipts)
  })

  test('should find one Receipt', async () => {
    const res: IReceipt = await dao.findOne({ id: 'some-id' })
    expect(mocks.findOne).toHaveBeenCalledTimes(1)
    expect(mocks.findOne).toHaveBeenCalledWith({ id: 'some-id' })
    expect(res).toEqual(receipts[0])
  })

  test('should create Receipt', async () => {
    const res: IReceipt = await dao.create({
      method: 'PayPal',
      amount: 9.99,
      status: 'PENDING',
      order: new Order(),
    })
    expect(mocks.create).toHaveBeenCalledTimes(1)
    expect(res).toEqual(receipts[1])
  })

  test('should update Receipt', async () => {
    const res: IReceipt = await dao.update('some-id', { status: 'COMPLETED' })
    expect(mocks.findByIdAndUpdate).toHaveBeenCalledTimes(1)
    expect(mocks.findByIdAndUpdate).toHaveBeenCalledWith('some-id', { status: 'COMPLETED' })
    expect(res).toEqual(receipts[0])
  })

  test('should remove Receipt', async () => {
    const res: IReceipt = await dao.remove('some-id')
    expect(mocks.findByIdAndDelete).toHaveBeenCalledTimes(1)
    expect(mocks.findByIdAndDelete).toHaveBeenCalledWith('some-id')
    expect(res).toEqual(receipts[1])
  })

  afterAll(() => {
    jest.clearAllMocks()
  })
})
