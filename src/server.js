import express from 'express'
import { connectDB } from '*/config/mongodb'
import { env } from '*/config/evirontment'
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

  app.get('/test', async(req, res) => {
    res.end('<h1>Hello world tuannuyen</h1><hr/>')
  })

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`Hello tuan, I'm running at ${env.APP_HOST}:${env.APP_PORT}/`)
  })

}