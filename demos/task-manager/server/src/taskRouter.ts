import { format, startOfDay, startOfToday } from 'date-fns'
import express from 'express'
import {
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
  NO_CONTENT,
} from 'http-status-codes'
import { auth } from './auth'
import { Task, TaskModel } from './taskSchema'
import { Request, Response } from './types'

export const taskRouter = express.Router()

taskRouter.get('/', auth, async (_: Request, res: Response<Task[]>) => {
  try {
    const tasks = await TaskModel.find().exec()
    res.send(tasks)
  } catch (err) {
    res.status(BAD_REQUEST).send({ error: err.message })
  }
})

taskRouter.get(
  '/completed',
  auth,
  async (_: Request, res: Response<Task[]>) => {
    try {
      const completed = await TaskModel.find({
        'dateInfo.completed': { $exists: true },
      }).exec()
      res.send(completed)
    } catch (err) {
      res.status(BAD_REQUEST).send({ error: err.message })
    }
  },
)

taskRouter.get('/pending', async (_: Request, res: Response<Task[]>) => {
  try {
    const pendingTasks = await TaskModel.find({
      'dateInfo.completed': { $exists: false },
    }).exec()
    res.send(pendingTasks)
  } catch (err) {
    res.status(BAD_REQUEST).send({ error: err.message })
  }
})

taskRouter.get('/today', async (_: Request, res: Response<Task[]>) => {
  try {
    const todayTasks = await TaskModel.find({
      'dateInfo.scheduled': {
        $eq: format(startOfDay(startOfToday()), 'YYYY-MM-DD'),
      },
    }).exec()
    res.send(todayTasks)
  } catch (err) {
    res.status(BAD_REQUEST).send({ error: err.message })
  }
})

taskRouter.get('/deadline', async (_: Request, res: Response<Task[]>) => {
  try {
    const deadlineToday = await TaskModel.find({
      'dateInfo.deadline': {
        $eq: format(startOfDay(startOfToday()), 'YYYY-MM-DD'),
      },
    }).exec()
    res.send(deadlineToday)
  } catch (err) {
    res.status(BAD_REQUEST).send({ error: err.message })
  }
})

taskRouter.get('/:id', async (req: Request, res: Response<Task>) => {
  try {
    const one = await TaskModel.findById(req.params.id).exec()
    if (one === null || one === undefined) {
      res.sendStatus(BAD_REQUEST)
    } else {
      res.send(one)
    }
  } catch (err) {
    res.status(INTERNAL_SERVER_ERROR).send({ error: err.message })
  }
})

taskRouter.post('/', async (req: Request, res: Response<Task>) => {
  try {
    const newTask = new TaskModel(req.body)
    const result = await newTask.save()
    res.send(result)
  } catch (err) {
    res.status(BAD_REQUEST).send({ error: err.message })
  }
})

taskRouter.put('/:id', async (req: Request, res: Response<Task>) => {
  try {
    const task = await TaskModel.findById(req.params.id).exec()
    if (task !== null) {
      task.set(req.body)
      const result = await task.save()
      res.send(result)
    } else {
      res
        .status(BAD_REQUEST)
        .send({ error: `no task with id: ${req.params.id}` })
    }
  } catch (err) {
    res.status(INTERNAL_SERVER_ERROR).send({ error: err.message })
  }
})

taskRouter.delete('/:id', async (req: Request, res: Response<Task>) => {
  try {
    await TaskModel.deleteOne({ _id: req.params.id }).exec()
    res.sendStatus(NO_CONTENT)
  } catch (err) {
    res.status(BAD_REQUEST).send({ error: err.message })
  }
})
