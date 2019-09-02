import ax, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { decode } from 'io-ts-promise'
import { stringify } from 'query-string'
import { String } from 'tcomb'
import {
  array,
  InputOf,
  Mixed,
  partial,
  string,
  TypeOf,
} from 'technoidentity-spec'
import { chop, debug, getProps, keys, verify } from 'technoidentity-utils'

export interface MethodArgs {
  readonly resource?: string
  readonly path?: string | readonly string[]
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

function buildPath(path?: string | readonly string[]): string {
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

function url(options: MethodArgs | string): string {
  return string.is(options) ? options : buildUrl(options)
}

// tslint:disable-next-line: typedef
export function http({ baseURL, ...config }: RequestConfig) {
  const axios: AxiosInstance = ax.create({
    ...config,
    baseURL: chop(baseURL),
  })

  async function get<Spec extends Mixed>(
    options: MethodArgs | string,
    type: Spec,
  ): Promise<TypeOf<Spec>> {
    return axios
      .get<InputOf<Spec>>(url(options))
      .then(res => res.data)
      .then(decode(type))
  }

  async function post<Spec extends Mixed>(
    options: Omit<MethodArgs, 'query'> | string,
    data: InputOf<Spec>,
    type: Spec,
  ): Promise<TypeOf<Spec>> {
    return axios
      .post<InputOf<Spec>>(url(options), data)
      .then(res => res.data)
      .then(decode(type))
  }

  async function patch<Spec extends Mixed>(
    options: Omit<MethodArgs, 'query'> | string,
    data: Partial<InputOf<Spec>>,
    type: Spec,
  ): Promise<TypeOf<Spec>> {
    return axios
      .patch<InputOf<Spec>>(url(options), data)
      .then(res => res.data)
      .then(decode(partial(getProps(type as any))))
  }

  async function put<Spec extends Mixed>(
    options: Omit<MethodArgs, 'query'> | string,
    data: InputOf<Spec>,
    type: Spec,
  ): Promise<TypeOf<Spec>> {
    return axios
      .put<InputOf<Spec>>(url(options), data)
      .then(res => res.data)
      .then(decode(type))
  }

  async function del(
    options: Omit<MethodArgs, 'query'> | string,
  ): Promise<void> {
    return axios.delete(url(options))
  }

  return { get, del, put, post, patch, axios }
}
