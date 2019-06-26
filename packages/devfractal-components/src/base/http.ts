import ax, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { Type } from 'io-ts'
import { decode } from 'io-ts-promise'
import { stringify } from 'query-string'
import { Array, String } from 'tcomb'
import { chop, invariant, warning } from '../lib'

export interface MethodArgs {
  readonly resource?: string
  readonly path?: string | ReadonlyArray<string>
  readonly query?: string | Record<string, any>
}

function noSlashWarning(s: string): void {
  invariant(String.is(s))

  warning(!s.includes('/'), `${s} should not contain "/"`)
}
export interface RequestConfig extends AxiosRequestConfig {
  readonly baseURL: string
}

function buildResource(resource?: string): string {
  if (resource !== undefined) {
    noSlashWarning(resource)
    return `/${resource}`
  }
  return ''
}

function buildPath(path?: string | ReadonlyArray<string>): string {
  if (Array.is(path)) {
    path.forEach(noSlashWarning)
    return `/${path.join('/')}`
  }

  if (String.is(path)) {
    noSlashWarning(path)
    return `/${path}`
  }

  return ''
}

function buildQueryString(query?: string | Record<string, any>): string {
  return query === undefined
    ? ''
    : `?${String.is(query) ? query : stringify(query)}`
}

export function buildUrl(options: MethodArgs): string {
  return `${buildResource(options.resource)}${buildPath(
    options.path,
  )}${buildQueryString(options.query)}`
}

// tslint:disable-next-line: typedef
export function http(config: RequestConfig) {
  const axios: AxiosInstance = ax.create({
    ...config,
    baseURL: chop(config.baseURL),
  })

  async function get<I, A>(
    options: MethodArgs,
    type: Type<A, A, I>,
  ): Promise<A> {
    return axios
      .get<I>(buildUrl(options))
      .then(res => res.data)
      .then(decode(type))
  }

  async function post<I, A>(
    options: Omit<MethodArgs, 'query'>,
    data: I,
    type: Type<A, A, I>,
  ): Promise<A> {
    return axios
      .post<I>(buildUrl(options), data)
      .then(res => res.data)
      .then(decode(type))
  }

  async function put<I, A>(
    options: Omit<MethodArgs, 'query'>,
    data: I,
    type: Type<A, A, I>,
  ): Promise<A> {
    return axios
      .put<I>(buildUrl(options), data)
      .then(res => res.data)
      .then(decode(type))
  }

  async function del(options: Omit<MethodArgs, 'query'>): Promise<void> {
    return axios.delete(buildUrl(options))
  }

  return { get, del, put, post }
}
