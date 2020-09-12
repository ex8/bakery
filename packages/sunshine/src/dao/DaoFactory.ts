import { AdminDao } from './AdminDao'
import { OrderDao } from './OrderDao'
import { ProductDao } from './ProductDao'
import { ReceiptDao } from './ReceiptDao'

export class DaoFactory {
  private adminDao: AdminDao
  private orderDao: OrderDao
  private productDao: ProductDao
  private receiptDao: ReceiptDao

  getAdminDao(): AdminDao {
    if (!this.adminDao) {
      this.adminDao = new AdminDao()
    }
    return this.adminDao
  }

  getOrderDao(): OrderDao {
    if (!this.orderDao) {
      this.orderDao = new OrderDao()
    }
    return this.orderDao
  }

  getProductDao(): ProductDao {
    if (!this.productDao) {
      this.productDao = new ProductDao()
    }
    return this.productDao
  }

  getReceiptDao(): ReceiptDao {
    if (!this.receiptDao) {
      this.receiptDao = new ReceiptDao()
    }
    return this.receiptDao
  }
}
