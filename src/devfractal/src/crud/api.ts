import axios from 'axios'
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
import { toPromise } from './internal'

export interface ApiUrls<IDType = unknown> {
  all(): string
  create(): string
  one(id: IDType): string
  remove(id: IDType): string
}

export function apiUrls<IDType = unknown>(
  baseUrl: string,
  resource: string,
): ApiUrls<IDType> {
  return {
    all: () => `${baseUrl}/${resource}`,
    create: () => `${baseUrl}/${resource}`,
    one: (id: IDType) => `${baseUrl}/${resource}/${id}`,
    remove: (id: IDType) => `${baseUrl}/${resource}/${id}`,
  }
}

interface ApiValues<
  T extends Props & { readonly id: any },
  V extends Mixed = ReadonlyC<TypeC<T>>,
  LV = ReadonlyArrayC<V>,
  IDType = T['id']
> {
  readonly baseUrl: string
  readonly resource: string
  readonly value: V
  readonly listValue: LV
  readonly urls: IDType
}

export interface Repository<
  T extends { readonly id: any },
  List = ReadonlyArray<T>,
  IDType = T['id']
> {
  all(): Promise<List>
  one(id: IDType): Promise<T>
  create(value: Omit<T, 'id'>): Promise<T>
  remove(id: IDType): Promise<T>
}

export type ApiRepository<T extends Props & { readonly id: any }> = Repository<
  TypeOf<ReadonlyC<TypeC<T>>>
> &
  ApiValues<T>

export interface APIArgs<
  T extends Props & { readonly id: any },
  V = ReadonlyC<TypeC<T>>,
  LV = ReadonlyArrayC<ReadonlyC<TypeC<T>>>,
  IDType = T['id']
> {
  readonly baseUrl: string
  readonly resource: string
  readonly value: V
  readonly listValue?: LV
  readonly urls?: IDType
}

export function api<T extends Props & { id: any }>({
  baseUrl,
  resource,
  value,
  listValue = readonlyArray(value),
  urls = apiUrls(baseUrl, resource),
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
    create: async () =>
      toPromise(
        value.decode(
          (await axios.post<TypeOf<typeof value>>(urls.create())).data,
        ),
      ),
    remove: async id =>
      // @TODO: data is any?!!!
      toPromise(value.decode((await axios.delete(urls.remove(id))).data)),
  }
}
