import { format, startOfDay, startOfToday } from 'date-fns'
import express, { Request, Response } from 'express'
import { auth } from './auth'
import { Task } from './taskSchema'

const router = express.Router()

router.get('/', async (_: Request, res: Response) => {
  try {
    const tasks = await Task.find().exec()
    res.send(tasks)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.get('/completed', auth, async (_: Request, res: Response) => {
  try {
    const completed = await Task.find({
      'dateInfo.completed': { $exists: true },
    }).exec()
    res.send(completed)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.get('/pending', async (_: Request, res: Response) => {
  try {
    const pendingTasks = await Task.find({
      'dateInfo.completed': { $exists: false },
    }).exec()
    res.send(pendingTasks)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.get('/today', async (_: Request, res: Response) => {
  try {
    const todayTasks = await Task.find({
      'dateInfo.scheduled': {
        $eq: format(startOfDay(startOfToday()), 'YYYY-MM-DD'),
      },
    }).exec()
    res.send(todayTasks)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.get('/deadline', async (_: Request, res: Response) => {
  try {
    const deadlineToday = await Task.find({
      'dateInfo.deadline': {
        $eq: format(startOfDay(startOfToday()), 'YYYY-MM-DD'),
      },
    }).exec()
    res.send(deadlineToday)
  } catch (err) {
    console.log(err.message)
  }
})

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const one = await Task.findById(req.params.id).exec()
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
      res.sendStatus(400)
    }
  } catch (err) {
    console.error(err)
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
