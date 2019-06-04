import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import * as mongoose from 'mongoose'
import tasks from './taskRouter'
import users from './userRouter'

const port = 9999

const uri: string = 'mongodb://localhost/mydatabase'

// tslint:disable-next-line: no-floating-promises
mongoose.connect(uri, { useNewUrlParser: true }, (err: any) => {
  if (err) {
    throw err
  }
  console.log('mongoose connected')
})

const app = (() => {
  const app = express()
  app.use(bodyParser.json())
  app.use(cors({ methods: ['GET', 'POST', 'PUT', 'DELETE'] }))

  app.use('/tasks', tasks)
  app.use('/users', users)

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
  })

  return app
})()
