import axios, { AxiosPromise } from 'axios'
import t, {
  Props,
  readonlyArray,
  ReadonlyArrayC,
  ReadonlyC,
  Type,
  TypeC,
  TypeOf,
  union,
} from 'io-ts'
import { Omit } from 'react-router'
import { TVT, typeInvariant } from '../lib'
import { toPromise } from './internal'

export interface URLs {
  all(): string
  create(): string
  one(id: string | number): string
  edit(id: string | number): string
  remove(id: string | number): string
}

export const apiURLs: (
  baseURL: string, // eg: 'https://localhost:3000'
  resource: string, // eg: 'todos'
) => URLs = (baseURL, resource) => ({
  all: () => `${baseURL}/${resource}`,

  create: () => `${baseURL}/${resource}`,

  one: (id: string | number) => {
    typeInvariant(union([t.number, t.string]), id)
    return `${baseURL}/${resource}/${id}`
  },

  edit: (id: string | number) => {
    typeInvariant(union([t.number, t.string]), id)
    return `${baseURL}/${resource}/${id}`
  },

  remove: (id: string | number) => {
    typeInvariant(union([t.number, t.string]), id)
    return `${baseURL}/${resource}/${id}`
  },
})

export interface Repository<T, ID extends keyof T> {
  all(): Promise<ReadonlyArray<T>>
  create(value: Omit<T, ID>): Promise<T>
  one(id: T[ID]): Promise<T>
  edit(value: T): Promise<T>
  remove(id: T[ID]): Promise<T>
}

export interface APIRepository<T extends Props, ID extends keyof T>
  extends Repository<TVT<T>, ID> {
  readonly baseUrl: string
  readonly resource: string
  readonly value: ReadonlyC<TypeC<T>>
  readonly listValue: ReadonlyArrayC<ReadonlyC<TypeC<T>>>
  readonly urls: URLs
}
export interface APIArgs<T extends Props, ID extends keyof T> {
  readonly baseUrl: string
  readonly resource: string
  readonly id: ID
  readonly value: ReadonlyC<TypeC<T>>
  readonly listValue?: ReadonlyArrayC<ReadonlyC<TypeC<T>>>
  readonly urls?: URLs
}

const request: <A>(
  value: Type<A>,
  promise: AxiosPromise<A>,
) => Promise<A> = async (value, promise) =>
  toPromise(value.decode((await promise).data))

export function api<T extends Props, ID extends keyof T>({
  baseUrl,
  resource,
  value,
  id,
  listValue = readonlyArray(value),
  urls = apiURLs(baseUrl, resource),
}: APIArgs<T, ID>): APIRepository<T, ID> {
  return {
    baseUrl,
    resource,
    value,
    listValue,
    urls,

    all: async () =>
      request(listValue, axios.get<TypeOf<typeof listValue>>(urls.all())),

    one: async pid => {
      typeInvariant(value.type.props[id], pid)
      return request(value, axios.get<TypeOf<typeof value>>(urls.one(pid)))
    },

    create: async values =>
      request(value, axios.post<TypeOf<typeof value>>(urls.create(), values)),

    edit: async values =>
      request(
        value,
        axios.put<TypeOf<typeof value>>(urls.edit(values.id), values),
      ),

    remove: async pid => {
      typeInvariant(value.type.props[id], pid)
      return request(value, axios.delete(urls.remove(pid)))
    },
  }
}
