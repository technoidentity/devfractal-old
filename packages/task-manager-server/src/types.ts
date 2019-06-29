import express from 'express'

export interface Request<
  Body extends Object | undefined = undefined,
  Query extends Object | undefined = undefined,
  Session extends Express.Session = Express.Session
> extends express.Request {
  body: Body
  query: Query
  session?: Session
}

export interface Response<Body extends Object = {}> extends express.Response {
  send(body?: Body): Response<Body>
}

export interface AuthSession extends Express.Session {
  loggedIn?: boolean
}
