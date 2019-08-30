import express from 'express'
import {
  BAD_REQUEST,
  CREATED,
  INTERNAL_SERVER_ERROR,
  NO_CONTENT,
} from 'http-status-codes'
import { boolean, string, TypeOf } from 'technoidentity-spec'
import { req } from 'technoidentity-utils'
import { AuthSession, Request, Response } from './types'
import { isUserValid } from './userSchema'

export const sessionRouter = express.Router()

export const AuthSegment = req({ authenticated: boolean })

type AuthSegment = TypeOf<typeof AuthSegment>

sessionRouter.get('/', (req: Request, res: Response<AuthSegment>) => {
  return res.send({ authenticated: req.session !== undefined })
})

export const PostSessionBody = req({ name: string, password: string })

type PostSessionBody = TypeOf<typeof PostSessionBody>

sessionRouter.post(
  '/',
  async (
    req: Request<PostSessionBody, undefined, AuthSession>,
    res: Response<AuthSegment>,
  ) => {
    try {
      if (
        req.session !== undefined &&
        (await isUserValid(req.body.name, req.body.password))
      ) {
        req.session.loggedIn = true
        return res
          .status(CREATED)
          .send({ name: req.body.name, password: req.body.password })
      }

      return res
        .status(BAD_REQUEST)
        .send({ error: 'Username or Password invalid' })
    } catch (err) {
      return res.sendStatus(INTERNAL_SERVER_ERROR)
    }
  },
)

sessionRouter.delete('/', (req: Request, res: Response) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.status(INTERNAL_SERVER_ERROR).send({ error: err.message })
      }

      res.clearCookie('session_id', {
        expires: new Date(),
      })

      res.sendStatus(NO_CONTENT)
    })
  }
})
