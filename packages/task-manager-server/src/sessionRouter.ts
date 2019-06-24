import express, { Request, Response } from 'express'
import { isUserValid } from './index'
const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  return res.send({ autheticated: req.session !== undefined })
})

router.post('/', async (req: Request, res: Response) => {
  try {
    const userValid = await isUserValid(req.body.name, req.body.password)
    if (userValid) {
      ;(req.session as any).loggedIn = true

      return res.sendStatus(201)
    } else {
      return res.sendStatus(400)
    }
  } catch (err) {
    return res.sendStatus(401)
  }
})

router.delete('/', (req: Request, res: Response) => {
  ;(req.session as any).loggedIn = false
  console.log(req.session)

  res.sendStatus(200)
})

export default router
