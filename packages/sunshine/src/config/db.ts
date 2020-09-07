import { Mongoose, connect, ConnectionOptions } from 'mongoose'

const dbUrl = 'mongodb://127.0.0.1:27017/bakery-db'

export default async function db(): Promise<Mongoose> {
  const opts: ConnectionOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
  return connect(dbUrl, opts)
}
