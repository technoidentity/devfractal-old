import axios from 'axios'
import { FormikActions } from 'formik'
import t, {
  Props,
  readonlyArray,
  ReadonlyArrayC,
  ReadonlyC,
  TypeC,
  TypeOf,
  union,
} from 'io-ts'
import { Omit } from 'react-router'
import { apiSubmit, TVT, typeInvariant } from '../lib'
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

export interface Repository<
  T extends { readonly [key: string]: unknown },
  ID extends keyof T
> {
  all(): Promise<ReadonlyArray<T>>
  create(value: Omit<T, ID>, actions: FormikActions<Omit<T, ID>>): Promise<T>
  one(id: T[ID]): Promise<T>
  edit(value: T, actions: FormikActions<T>): Promise<T>
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
      toPromise(
        listValue.decode(
          (await axios.get<TypeOf<typeof listValue>>(urls.all())).data,
        ),
      ),

    one: async pid => {
      typeInvariant(value.type.props[id], pid)
      return toPromise(
        value.decode(
          // @TODO: enforce correct type for id at runtime using 'value'
          (await axios.get<TypeOf<typeof value>>(urls.one(pid))).data,
        ),
      )
    },

    create: async (values, actions) =>
      toPromise(
        value.decode(
          await apiSubmit<Omit<TypeOf<typeof value>, ID>>({
            url: urls.create(),
          })(values, actions),
        ),
      ),
    edit: async (values, actions) =>
      toPromise(
        value.decode(
          await apiSubmit<TypeOf<typeof value>>({
            url: urls.edit(values.id),
            action: 'put',
          })(values, actions),
        ),
      ),

    remove: async pid => {
      typeInvariant(value.type.props[id], pid)
      return toPromise(
        value.decode((await axios.delete(urls.remove(pid))).data),
      )
    },
  }
}
