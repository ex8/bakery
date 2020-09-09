import { IProduct } from '@bakery/soil-api'
import { Product, Admin } from '../../../src/models'
import { ProductDao } from '../../../src/dao'

interface IMock {
  find: jest.SpyInstance
  findOne: jest.SpyInstance
  create: jest.SpyInstance
  findByIdAndUpdate: jest.SpyInstance
  findByIdAndDelete: jest.SpyInstance
}

describe('ProductDao', () => {
  let mocks: IMock
  const dao: ProductDao = new ProductDao()
  const products: IProduct[] = [new Product(), new Product()]

  beforeAll(() => {
    mocks = {
      find: jest.spyOn(Product, 'find').mockResolvedValueOnce(products),
      findOne: jest.spyOn(Product, 'findOne').mockResolvedValueOnce(products[0]),
      create: jest.spyOn(Product, 'create').mockResolvedValueOnce(products[1]),
      findByIdAndUpdate: jest.spyOn(Product, 'findByIdAndUpdate').mockResolvedValueOnce(products[0]),
      findByIdAndDelete: jest.spyOn(Product, 'findByIdAndDelete').mockResolvedValueOnce(products[1]),
    }
  })

  test('should find Products', async () => {
    const res: IProduct[] = await dao.find({})
    expect(mocks.find).toHaveBeenCalledTimes(1)
    expect(mocks.find).toHaveBeenCalledWith({})
    expect(res).toEqual(products)
  })

  test('should find one Product', async () => {
    const res: IProduct = await dao.findOne({ id: 'some-id' })
    expect(mocks.findOne).toHaveBeenCalledTimes(1)
    expect(mocks.findOne).toHaveBeenCalledWith({ id: 'some-id' })
    expect(res).toEqual(products[0])
  })

  test('should create Product', async () => {
    const res: IProduct = await dao.create({
      title: 'some-title',
      description: 'some-description',
      images: ['img1', 'img2'],
      price: 9.99,
      public: true,
      admin: new Admin(),
    })
    expect(mocks.create).toHaveBeenCalledTimes(1)
    expect(res).toEqual(products[1])
  })

  test('should update Product', async () => {
    const res: IProduct = await dao.update('some-id', { public: false })
    expect(mocks.findByIdAndUpdate).toHaveBeenCalledTimes(1)
    expect(mocks.findByIdAndUpdate).toHaveBeenCalledWith('some-id', { public: false })
    expect(res).toEqual(products[0])
  })

  test('should remove Product', async () => {
    const res: IProduct = await dao.remove('some-id')
    expect(mocks.findByIdAndDelete).toHaveBeenCalledTimes(1)
    expect(mocks.findByIdAndDelete).toHaveBeenCalledWith('some-id')
    expect(res).toEqual(products[1])
  })

  afterAll(() => {
    jest.clearAllMocks()
  })
})
