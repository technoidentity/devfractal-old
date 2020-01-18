import express, { Response } from 'express'
import { BAD_REQUEST, NO_CONTENT } from 'http-status-codes'
import { Request } from './types'
import { UserModel } from './userSchema'

export const userRouter = express.Router()

userRouter.get('/', async (_: Request, res: Response) => {
  try {
    const users = await UserModel.find().exec()
    res.send(users)
  } catch (err) {
    res.status(BAD_REQUEST).send({ error: err.message })
  }
})

userRouter.get('/:id', async (req: Request, res: Response) => {
  try {
    await UserModel.findById(req.params.id).exec()
    res.sendStatus(NO_CONTENT)
  } catch (err) {
    res.status(BAD_REQUEST).send({ error: err.message })
  }
})

userRouter.post('/', async (req: Request, res: Response) => {
  try {
    const newUser = new UserModel(req.body)
    const result = await newUser.save()
    res.send(result)
  } catch (err) {
    res.status(BAD_REQUEST).send({ error: err.message })
  }
})

userRouter.put('/:id', async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findById({ _id: req.params.id }).exec()
    if (user !== undefined && user !== null) {
      user.set(req.body)
      const result = await user.save()
      res.send(result)
    } else {
      res
        .status(BAD_REQUEST)
        .send({ error: `User with ${req.params.id} not available` })
    }
  } catch (err) {
    res.status(BAD_REQUEST).send({ error: err.message })
  }
})

userRouter.delete('/:id', async (req: Request, res: Response) => {
  try {
    await UserModel.deleteOne({ _id: req.params.id }).exec()
    res.sendStatus(NO_CONTENT)
  } catch (err) {
    res.status(BAD_REQUEST).send({ error: err.message })
  }
})
