import express, { Request, Response } from 'express'
import User from './userSchema'
const app = express()
const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await User.find().exec()
    res.send(users)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const one = await User.findById(req.params.id).exec()
    res.send(one)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.post('/', async (req: Request, res: Response) => {
  try {
    const newUser = new User(req.body)
    const result = await newUser.save()
    res.send(result)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const user = await User.findById({ _id: req.params.id }).exec()
    if (user !== null) {
      user.set(req.body)
      const result = await user.save()
      res.send({ foo: 'bar' })
    } else {
      console.log('task with the given id has not found')
    }
  } catch (err) {
    res.status(500).send(err)
  }
})

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const one = await User.deleteOne({ _id: req.params.id }).exec()
    res.send(one)
  } catch (err) {
    res.status(500).send(err)
  }
})

export default router
