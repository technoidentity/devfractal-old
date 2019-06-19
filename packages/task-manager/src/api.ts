import axios from 'axios'
import * as t from 'io-ts'
import * as tp from 'io-ts-promise'
import { reporter } from 'io-ts-reporters'
import queryString from 'query-string'
import { String } from 'tcomb'

interface Options {
  readonly path?: string
  readonly query?: string | Object
}
interface API<A> {
  many(options?: Options): Promise<readonly A[]>
  create(data: Omit<A, '_id'>): Promise<A>
  get(id: string): Promise<A>
  one(options?: Options): Promise<A>
  update(id: string, data: A): Promise<A>
}

function buildPath(s?: string): string {
  return s === undefined ? '' : `/${s}`
}

function buildQueryString(query?: string | Object): string {
  return query === undefined
    ? ''
    : `?${String.is(query) ? query : queryString.stringify(query)}`
}

function buildUrl(baseUrl: string, options?: Options): string {
  return options === undefined
    ? ''
    : `${baseUrl}${buildPath(options.path)}?${buildQueryString(options.query)}`
}

export function api<I, A>(
  baseUrl: string,
  type: t.Mixed & t.Decoder<I, A>,
): API<A> {
  async function many(options?: Options): Promise<ReadonlyArray<A>> {
    return axios
      .get(buildUrl(baseUrl, options))
      .then(res => tp.decode(t.readonlyArray(type), res.data))
  }

  async function one(options?: Options): Promise<A> {
    return axios
      .get(buildUrl(baseUrl, options))
      .then(res => tp.decode(type, res.data))
  }

  async function create(data: A): Promise<A> {
    const decoded = type.decode(data)
    if (decoded.isLeft()) {
      throw new Error(reporter(decoded).join('\n'))
    }
    return axios.post(baseUrl, data).then(res => tp.decode(type, res.data))
  }

  async function get(id: string): Promise<A> {
    return one({ path: id })
  }

  async function update(id: string, data: A): Promise<A> {
    const decoded = type.decode(data)
    if (decoded.isLeft()) {
      throw new Error(reporter(decoded).join('\n'))
    }
    return axios.put(baseUrl + id, data).then(res => tp.decode(type, res.data))
  }

  return { one, many, get, update, create }
}
