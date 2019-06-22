import express, { Request, Response } from 'express'
const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  return res.send({ autheticated: req.session !== undefined })
})

router.post('/', async (req: Request, res: Response) => {
  try {
    ;(req.session as any).loggedIn = true
    console.log(req.session)
    return res.sendStatus(201)
  } catch (err) {
    return res.sendStatus(401)
  }
})

// router.delete('/', async (req: Request, res: Response) => {
//   ;(req.session as any).loggedIn = undefined
//   return res.sendStatus(204)
// })

export default router
