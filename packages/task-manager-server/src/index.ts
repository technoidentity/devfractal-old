import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import * as mongoose from 'mongoose'
import tasks from './taskRouter'
import users from './userRouter'
import { task1 } from './taskSchema'

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

// app.get('/users', async (req: Request, res: Response) => {
//   try {
//     const users = await User.find().exec()
//     res.send(users)
//   } catch (err) {
//     res.status(500).send(err)
//   }
// })

// app.get('/users/:id', async (req: Request, res: Response) => {
//   try {
//     const one = await User.findById(req.params.id).exec()
//     res.send(one)
//   } catch (err) {
//     res.status(500).send(err)
//   }
// })

// app.post('/users', async (req: Request, res: Response) => {
//   try {
//     const newUser = new User(req.body)
//     const result = await newUser.save()
//     res.send(result)
//   } catch (err) {
//     res.status(500).send(err)
//   }
// })

// app.put('/users/:id', async (req: Request, res: Response) => {
//   try {
//     const user = await User.findById({ _id: req.params.id }).exec()
//     if (user !== null) {
//       user.set(req.body)
//       const result = await user.save()
//       res.send({ foo: 'bar' })
//     } else {
//       console.log('task with the given id has not found')
//     }
//   } catch (err) {
//     res.status(500).send(err)
//   }
// })

// app.delete('/users/:id', async (req: Request, res: Response) => {
//   try {
//     const one = await User.deleteOne({ _id: req.params.id }).exec()
//     res.send(one)
//   } catch (err) {
//     res.status(500).send(err)
//   }
// })

console.log(task1)
