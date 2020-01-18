import express from 'express'

export interface Request<
  Body extends {} | undefined = undefined,
  Query extends {} | undefined = undefined,
  Session extends Express.Session = Express.Session
> extends express.Request {
  body: Body
  query: Query
  session?: Session
}

export interface AuthSession extends Express.Session {
  loggedIn?: boolean
}
