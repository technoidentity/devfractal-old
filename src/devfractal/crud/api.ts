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

export interface ApiUrls {
  all(): string
  create(): string
  one(id: unknown): string
  remove(id: unknown): string
}

export const apiUrls: (baseUrl: string, resource: string) => ApiUrls = (
  baseUrl,
  resource,
) => ({
  all: () => `${baseUrl}/${resource}`,
  create: () => `${baseUrl}/${resource}`,
  one: (id: unknown) => `${baseUrl}/${resource}/${id}`,
  remove: (id: unknown) => `${baseUrl}/${resource}/${id}`,
})

interface ApiValues<
  T extends Props & { readonly id: any },
  V extends Mixed = ReadonlyC<TypeC<T>>,
  LV = ReadonlyArrayC<V>
> {
  readonly baseUrl: string
  readonly resource: string
  readonly value: V
  readonly listValue: LV
  readonly urls: ApiUrls
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
  LV = ReadonlyArrayC<ReadonlyC<TypeC<T>>>
> {
  readonly baseUrl: string
  readonly resource: string
  readonly value: V
  readonly listValue?: LV
  readonly urls?: ApiUrls
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
      toPromise(value.decode((await axios.delete(urls.remove(id))).data)),
  }
}
