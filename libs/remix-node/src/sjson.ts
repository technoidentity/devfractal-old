import type { TypedResponse } from '@remix-run/node'
import { json } from '@remix-run/node'
import { serialize } from 'superjson'
import type { SuperJSONResult } from 'superjson/dist/types'

export function sjson<T>(data: T, init?: Parameters<typeof json>[1]) {
  const result = json(serialize(data), init)

  return result as TypedResponse<SuperJSONResult> & { __srtp__type?: T }
}
