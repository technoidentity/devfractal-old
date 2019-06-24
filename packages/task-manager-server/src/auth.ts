import express from 'express'
import { AuthSession, Request } from './types'

export const auth = async (
  req: Request<unknown, unknown, AuthSession>,
  res: express.Response,
  next: express.NextFunction,
) => {
  if (req.session && req.session.loggedIn) {
    next()
  } else {
    res.status(401).send({ errors: 'Not authorized to access this resource' })
  }
}
