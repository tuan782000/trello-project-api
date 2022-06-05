import { MongoClient } from 'mongodb'
import { env } from '*/config/evirontment'

export const connectDB = async () => {
  const client = new MongoClient(env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })

  try {
    await client.connect()
    console.log('connect successfully to server')
    await listDatabases(client)
  } finally {
    await client.close()

  }
}

const listDatabases = async (client) => {
  const databasesList = await client.db().admin().listDatabases()
  console.log(databasesList)
  console.log('Your databses:')
  databasesList.databases.forEach(db => console.log(`-${db.name}`))
}