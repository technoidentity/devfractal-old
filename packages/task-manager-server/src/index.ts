import express from 'express'
import * as mongoose from 'mongoose'
import bodyParser from 'body-parser'
import { Request, Response } from 'express'
import Task from './tasks'
import cors from 'cors'

const port = 3000

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

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
  })

  return app
})()

app.get('/tasks', async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find().exec()
    res.send(tasks)
  } catch (err) {
    res.status(500).send(err)
  }
})

app.post('/tasks', async (req: Request, res: Response) => {
  try {
    const newTask = new Task(req.body)
    const result = await newTask.save()
    res.send(result)
  } catch (err) {
    res.status(500).send(err)
  }
})

app.put('/tasks/:id', async (req: Request, res: Response) => {
  try {
    const task = await Task.findById(req.params.id).exec()
    if (task !== null) {
      task.set(req.body)
      const result = await task.save()
      res.send(result)
    }
    console.log('task with the given id has not found')
  } catch (err) {
    res.send(500).status(err)
  }
})

app.delete('/tasks/:id', async (req: Request, res: Response) => {
  try {
    const one = await Task.deleteOne({ _id: req.params.id }).exec()
    res.send(one)
  } catch (err) {
    res.status(500).send(err)
  }
})
