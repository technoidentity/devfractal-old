import express from 'express'
import { Request, Response } from './types'
import UserModel, { User } from './userSchema'
import status from 'http-status-codes'
const router = express.Router()

router.get('/', async (_: Request, res: Response<User[]>) => {
  try {
    const users = await UserModel.find().exec()
    res.send(users)
  } catch (err) {
    res.status(status.BAD_REQUEST).send(err)
  }
})

router.get('/:id', async (req: Request, res: Response<User>) => {
  try {
    await UserModel.findById(req.params.id).exec()
    res.sendStatus(status.NO_CONTENT)
  } catch (err) {
    res.status(status.BAD_REQUEST).send(err)
  }
})

router.post('/', async (req: Request, res: Response<User>) => {
  try {
    const newUser = new UserModel(req.body)
    const result = await newUser.save()
    res.send(result)
  } catch (err) {
    res.status(status.BAD_REQUEST).send(err)
  }
})

router.put('/:id', async (req: Request, res: Response<User>) => {
  try {
    const user = await UserModel.findById({ _id: req.params.id }).exec()
    if (user !== undefined && user !== null) {
      user.set(req.body)
      const result = await user.save()
      res.send(result)
    } else {
      res
        .status(status.BAD_REQUEST)
        .send({ errors: `User with ${req.params.id} not available` })
    }
  } catch (err) {
    res.status(status.BAD_REQUEST).send(err)
  }
})

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    await UserModel.deleteOne({ _id: req.params.id }).exec()
    res.sendStatus(status.NO_CONTENT)
  } catch (err) {
    res.status(status.BAD_REQUEST).send(err)
  }
})

export default router
