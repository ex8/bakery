import app from './app'
import db from './config/db'

async function run() {
  try {
    await db()
  } catch (err) {
    const { message } = err as Error
    throw new Error(`db connection unsuccesful; ${message}`)
  }
  app.listen(8000, () => console.log(`Bakery API running on ${8000}`))
}

run()
  .catch(err => console.error(err))
