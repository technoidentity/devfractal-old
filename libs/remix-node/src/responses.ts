// import status from 'http-status-codes'

import { redirect } from '@remix-run/node'
import { sjson } from './sjson'

type Init = Omit<ResponseInit, 'status'>

export function created<T>(data: T, init?: Init) {
  return sjson(data, { ...init, status: 201 })
}

export function redirectBack(
  request: Request,
  { fallback, ...init }: ResponseInit & { fallback: string },
): Response {
  return redirect(request.headers.get('Referer') ?? fallback, init)
}

export function badRequest<T>(data: T, init?: Init) {
  return sjson(data, { ...init, status: 400 })
}

export function unauthorized<T>(data: T, init?: Init) {
  return sjson(data, { ...init, status: 401 })
}

export function forbidden<T>(data: T, init?: Init) {
  return sjson(data, { ...init, status: 403 })
}

export function notFound<T>(data: T, init?: Init) {
  return sjson(data, { ...init, status: 404 })
}

export function unprocessableEntity<T>(data: T, init?: Init) {
  return sjson(data, { ...init, status: 422 })
}

export function serverError<T>(data: T, init?: Init) {
  return sjson(data, { ...init, status: 500 })
}

export function notModified(init?: Init) {
  return new Response('', { ...init, status: 304 })
}
