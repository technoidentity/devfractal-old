import ax, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { array, string, Type } from 'io-ts'
import { decode } from 'io-ts-promise'
import { stringify } from 'query-string'
import { String } from 'tcomb'
import { chop, debug, keys, verify } from 'technoidentity-utils'

export interface MethodArgs {
  readonly resource?: string
  readonly path?: string | ReadonlyArray<string>
  readonly query?: string | Record<string, any>
}

function slashWarn(s: string): void {
  verify(String.is(s))

  debug(!s.includes('/'), `${s} should not contain "/"`)
}
export interface RequestConfig extends AxiosRequestConfig {
  readonly baseURL: string
}

function buildResource(resource?: string): string {
  if (resource !== undefined && resource.trim() !== '') {
    slashWarn(resource)
    return `/${resource}`
  }

  return ''
}

function buildPath(path?: string | ReadonlyArray<string>): string {
  if (array(string).is(path)) {
    const paths: string[] = path.filter(p => p.trim() !== '')
    paths.forEach(slashWarn)
    return paths.length === 0 ? '' : `/${paths.join('/')}`
  }

  if (string.is(path) && path.trim() !== '') {
    slashWarn(path)
    return `/${path}`
  }

  return ''
}

function buildQueryString(query?: string | Record<string, any>): string {
  return query === undefined || keys(query).length === 0
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

  async function get<A, O, I>(
    options: MethodArgs,
    type: Type<A, O, I>,
  ): Promise<A> {
    return axios
      .get<I>(buildUrl(options))
      .then(res => res.data)
      .then(decode(type))
  }

  async function post<A, O, I>(
    options: Omit<MethodArgs, 'query'>,
    data: I,
    type: Type<A, O, I>,
  ): Promise<A> {
    return axios
      .post<I>(buildUrl(options), data)
      .then(res => res.data)
      .then(decode(type))
  }

  async function put<A, O, I>(
    options: Omit<MethodArgs, 'query'>,
    data: I,
    type: Type<A, O, I>,
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
