import bodyParser from 'body-parser'
import cors from 'cors'
import { addDays } from 'date-fns'
import express from 'express'
import session from 'express-session'
import mongoose from 'mongoose'
import { sessionRouter } from './sessionRouter'
import { taskRouter } from './taskRouter'
import { userRouter } from './userRouter'

const port = 9999

const uri: string = 'mongodb://localhost/mydatabase'

// tslint:disable-next-line: no-floating-promises
mongoose.connect(uri, { useNewUrlParser: true }, (err: any) => {
  if (err) {
    throw err
  }
  console.log('mongoose connected')
})

export const app = (() => {
  const app = express()

  app.use(bodyParser.json())

  app.use(
    cors({
      origin: 'http://localhost:1234',
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
    }),
  )

  app.use(
    session({
      name: 'session_id',
      secret: '343ji43j4n3jn4jk3n',
      resave: false,
      saveUninitialized: false,
      cookie: {
        expires: addDays(new Date(), 7),
      },
    }),
  )

  app.use('/tasks', taskRouter)
  app.use('/users', userRouter)
  app.use('/session', sessionRouter)

  app.listen(port, () => console.log(`Example app listening on port ${port}!`))

  return app
})()
