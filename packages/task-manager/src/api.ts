import ax from 'axios'
import * as t from 'io-ts'
import * as tp from 'io-ts-promise'
import { reporter } from 'io-ts-reporters'
import queryString from 'query-string'

interface Options {
  readonly paths?: string
  readonly query?: string | Object
}
interface API<A> {
  many(options?: Options): Promise<readonly A[]>
  create(data: Omit<A, '_id'>): Promise<A>
  get(id: string): Promise<A>
  one(options?: Options): Promise<A>
  update(id: string, data: A): Promise<A>
}

function buildPath(s?: string | ReadonlyArray<string>): string {
  if (s === undefined) {
    return ''
  }
  if (t.Array.is(s)) {
    return `/${s.join('/')}`
  }
  return `/${s}`
}

function buildQueryString(query?: string | Object): string {
  return query === undefined
    ? ''
    : `?${t.string.is(query) ? query : queryString.stringify(query)}`
}

function buildUrl(baseUrl: string, options?: Options): string {
  return options === undefined
    ? baseUrl
    : `${baseUrl}${buildPath(options.paths)}?${buildQueryString(options.query)}`
}

const axios = ax.create({ withCredentials: true })

export function api<I, A>(
  baseUrl: string,
  type: t.Mixed & t.Decoder<I, A>,
): API<A> {
  async function many(options?: Options): Promise<ReadonlyArray<A>> {
    return axios
      .get(buildUrl(baseUrl, options))
      .then(res => res.data)
      .then(tp.decode(t.readonlyArray(type)))
  }

  async function one(options?: Options): Promise<A> {
    return axios
      .get(buildUrl(baseUrl, options))
      .then(res => res.data)
      .then(tp.decode(type))
  }

  async function create(data: A): Promise<A> {
    const decoded = type.decode(data)
    if (decoded.isLeft()) {
      throw new Error(reporter(decoded).join('\n'))
    }

    return axios
      .post(baseUrl, data)
      .then(res => res.data)
      .then(tp.decode(type))
  }

  async function get(id: string): Promise<A> {
    return one({ paths: id })
  }

  async function update(id: string, data: A): Promise<A> {
    const decoded = type.decode(data)
    if (decoded.isLeft()) {
      throw new Error(reporter(decoded).join('\n'))
    }

    return axios
      .put(buildUrl(baseUrl, { paths: id }), data)
      .then(res => res.data)
      .then(tp.decode(type))
  }

  return { one, many, get, update, create }
}
