import { MongoClient } from 'mongodb'
import { env } from '*/config/evirontment'

let dbInstance = null

export const connectDB = async () => {
  const client = new MongoClient(env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })

  await client.connect()

  dbInstance = client.db(env.DATABASE_NAME)
}

export const getDB = () => {
  if (!dbInstance) throw new Error('Must have connect to Database first')
  return dbInstance
}