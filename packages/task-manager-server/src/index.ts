import bodyParser from 'body-parser'
import cors from 'cors'
import { format } from 'date-fns'
import express from 'express'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import * as mongoose from 'mongoose'
import login from './sessionRouter'
import tasks from './taskRouter'
import users from './userRouter'

const port = 9999

const uri: string = 'mongodb://localhost/mydatabase'

const currentDate = format(new Date(), 'YYYY/MM/DD')

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
  app.use(
    cors({
      origin: true,
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
    }),
  )

  app.use(cookieParser())
  app.use(
    session({
      secret: '343ji43j4n3jn4jk3n',
      resave: false,
      saveUninitialized: false,
      cookie: { secure: true },
    }),
  )

  app.use('/tasks', tasks)
  app.use('/users', users)
  app.use('/session', login)

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
  })

  return app
})()
