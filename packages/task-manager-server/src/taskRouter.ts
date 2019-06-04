import express, { Request, Response } from 'express'
import { Task } from './taskSchema'
const app = express()
const router = express.Router()

router.get('/', async (_: Request, res: Response) => {
  try {
    const tasks = await Task.find().exec()
    res.send(tasks)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const one = await Task.findById(req.params.id).exec()
    console.log(one)
    res.send(one)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.post('/', async (req: Request, res: Response) => {
  try {
    const newTask = new Task(req.body)
    const result = await newTask.save()
    res.send(result)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const task = await Task.findById(req.params.id).exec()
    if (task !== null) {
      task.set(req.body)
      const result = await task.save()
      res.send(result)
    } else {
      console.log('task with the given id has not found')
    }
  } catch (err) {
    res.status(500).send(err)
  }
})

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const one = await Task.deleteOne({ _id: req.params.id }).exec()
    res.send(one)
  } catch (err) {
    res.status(500).send(err)
  }
})

export default router
