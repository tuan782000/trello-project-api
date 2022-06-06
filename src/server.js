import express from 'express'
import cors from 'cors'
import { corsOptions } from '*/config/cors'
import { connectDB } from '*/config/mongodb'
import { env } from '*/config/evirontment'
import { apiV1 } from '*/routes/v1'
// import {BoardModel} from '*/models/board.model'

connectDB()
  .then(() => console.log('Connected Successfully to databse server!'))
  .then(() => bootServer())
  .catch(error => {
    console.error(error)
    process.exit(1)
  })

const bootServer = () => {
  const app = express()

 
  app.use(cors(corsOptions))
  //Enable req.body data
  app.use(express.json())
  // Use APIs v1
  app.use('/v1', apiV1)

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`Hello tuan, I'm running at ${env.APP_HOST}:${env.APP_PORT}/`)
  })

}