import ax, { AxiosRequestConfig } from 'axios'
import { Array, Decoder, string } from 'io-ts'
import { decode } from 'io-ts-promise'
import { stringify } from 'query-string'

export interface MethodArgs {
  readonly resource?: string
  readonly path?: string | ReadonlyArray<string>
  readonly query?: string | Object
}

export interface RequestConfig extends AxiosRequestConfig {
  readonly baseURL: string
}

function buildResource(resource?: string): string {
  return resource === undefined ? '' : `/${resource}`
}

function buildPath(path?: string | ReadonlyArray<string>): string {
  return path === undefined
    ? ''
    : Array.is(path)
    ? `/${path.join('/')}`
    : `/${path}`
}

function buildQueryString(query?: string | Object): string {
  return query === undefined
    ? ''
    : `?${string.is(query) ? query : stringify(query)}`
}

export function buildUrl(options: MethodArgs): string {
  return `${buildResource(options.resource)}${buildPath(
    options.path,
  )}${buildQueryString(options.query)}`
}

// tslint:disable typedef

export function http(config: RequestConfig) {
  const axios = ax.create(config)

  async function get<I, A>(
    options: MethodArgs,
    type: Decoder<I, A>,
  ): Promise<A> {
    return axios
      .get(buildUrl(options))
      .then(res => res.data)
      .then(decode(type))
  }

  async function post<I, A>(
    options: Omit<MethodArgs, 'query'>,
    data: I,
    type: Decoder<I, A>,
  ): Promise<A> {
    return axios
      .post(buildUrl(options), data)
      .then(res => res.data)
      .then(decode(type))
  }

  async function put<I, A>(
    options: Omit<MethodArgs, 'query'>,
    data: I,
    type: Decoder<I, A>,
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
