import express from 'express'
import { connectDB } from '*/config/mongodb'
import { env } from '*/config/evirontment'


const app = express()

connectDB().catch(console.log)

app.get('/', (req, res) => {
  res.end('<h1>Hello world tuannuyen</h1><hr/>')
})

app.listen(env.PORT, env.HOST, () => {
  console.log(`Hello tuan, I'm running at ${env.HOST}:${env.PORT}/`)
})