import express from 'express'
import status from 'http-status-codes'
import { AuthSession, Request, Response } from './types'

export const router = express.Router()

interface AuthSegment {
  authenticated: boolean
}

router.get('/', (req: Request, res: Response<AuthSegment>) => {
  return res.send({ authenticated: req.session !== undefined })
})

router.post(
  '/',
  async (
    req: Request<unknown, unknown, AuthSession>,
    res: Response<AuthSegment>,
  ) => {
    try {
      if (req.session !== undefined) {
        req.session.loggedIn = true
        return res.sendStatus(status.CREATED)
      } else {
        return res.sendStatus(status.INTERNAL_SERVER_ERROR)
      }
    } catch (err) {
      return res.sendStatus(status.BAD_REQUEST)
    }
  },
)

router.delete('/', (req: Request, res: Response) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        throw err
      }
      res.sendStatus(status.NO_CONTENT)
    })
  }
})
