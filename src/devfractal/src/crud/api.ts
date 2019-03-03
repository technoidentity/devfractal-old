import axios from 'axios'
import { FormikActions } from 'formik'
import {
  Mixed,
  Props,
  readonlyArray,
  ReadonlyArrayC,
  ReadonlyC,
  TypeC,
  TypeOf,
} from 'io-ts'
import { Omit } from 'react-router'
import { apiSubmit, TVT } from '../lib'
import { toPromise } from './internal'

export interface ApiUrls<IDType> {
  all(): string
  create(): string
  one(id: IDType): string
  edit(id: IDType): string
  remove(id: IDType): string
}

export function apiUrls<IDType>(
  baseUrl: string, // eg: 'https://localhost:3000'
  resource: string, // eg: 'todos'
): ApiUrls<IDType> {
  return {
    all: () => `${baseUrl}/${resource}`,
    create: () => `${baseUrl}/${resource}`,
    one: (id: IDType) => `${baseUrl}/${resource}/${id}`,
    edit: (id: IDType) => `${baseUrl}/${resource}/${id}`,
    remove: (id: IDType) => `${baseUrl}/${resource}/${id}`,
  }
}

interface ApiValues<
  T extends Props,
  V extends Mixed = ReadonlyC<TypeC<T>>,
  LV = ReadonlyArrayC<V>,
  ID extends keyof T = 'id'
> {
  readonly baseUrl: string
  readonly resource: string
  readonly value: V
  readonly listValue: LV
  readonly urls: ApiUrls<T[ID]>
}

export interface Repository<
  T extends { readonly [key: string]: unknown },
  ID extends keyof T = 'id',
  List = ReadonlyArray<T>
> {
  all(): Promise<List>
  create(value: Omit<T, ID>, actions: FormikActions<Omit<T, ID>>): Promise<T>
  one(id: T[ID]): Promise<T>
  edit(value: T, actions: FormikActions<T>): Promise<T>
  remove(id: T[ID]): Promise<T>
}

export type ApiRepository<
  T extends Props,
  ID extends keyof T = 'id'
> = Repository<TVT<T>, ID> & ApiValues<T>

export interface APIArgs<
  T extends Props,
  V = ReadonlyC<TypeC<T>>,
  LV = ReadonlyArrayC<ReadonlyC<TypeC<T>>>,
  ID extends keyof T = 'id'
> {
  readonly baseUrl: string
  readonly resource: string
  readonly value: V
  readonly listValue?: LV
  readonly urls?: ApiUrls<T[ID]>
}

export function api<T extends Props, ID extends keyof T = 'id'>({
  baseUrl,
  resource,
  value,
  listValue = readonlyArray(value),
  urls = apiUrls<T[ID]>(baseUrl, resource),
}: APIArgs<T>): ApiRepository<T> {
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
    one: async id =>
      toPromise(
        value.decode(
          // @TODO: enforce correct type for id at runtime using 'value'
          (await axios.get<TypeOf<typeof value>>(urls.one(id))).data,
        ),
      ),
    create: async (values, actions) =>
      toPromise(
        value.decode(
          await apiSubmit<Omit<TypeOf<typeof value>, 'id'>>({
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
    remove: async id =>
      // @TODO: data is any?!!!
      toPromise(value.decode((await axios.delete(urls.remove(id))).data)),
  }
}
