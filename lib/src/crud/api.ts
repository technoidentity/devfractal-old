import axios, { AxiosPromise } from 'axios'
import t, {
  Props,
  readonlyArray,
  ReadonlyArrayC,
  ReadonlyC,
  Type,
  TypeC,
  TypeOf,
} from 'io-ts'
import { eitherToPromise, Omit, typeInvariant, TypeOfRT } from 'utils'
import { idRT } from './utils'

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

  one: (id: string | t.Branded<number, t.IntBrand>) => {
    typeInvariant(idRT, id)
    return `${baseURL}/${resource}/${id}`
  },

  edit: (id: string | t.Branded<number, t.IntBrand>) => {
    typeInvariant(idRT, id)
    return `${baseURL}/${resource}/${id}`
  },

  remove: (id: string | t.Branded<number, t.IntBrand>) => {
    typeInvariant(idRT, id)
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

export interface APIArgs<T extends Props, ID extends keyof T> {
  readonly baseUrl: string
  readonly value: ReadonlyC<TypeC<T>>
  readonly id: ID
  readonly idDecoder: t.Type<TypeOf<T[ID]>, string>
  readonly resource: string
  readonly listValue?: ReadonlyArrayC<ReadonlyC<TypeC<T>>>
  readonly urls?: URLs
}

export interface APIRepository<T extends Props, ID extends keyof T>
  extends Repository<TypeOfRT<T>, ID>,
    Required<APIArgs<T, ID>> {}

const request: <A>(
  value: Type<A>,
  promise: AxiosPromise<A>,
) => Promise<A> = async (value, promise) =>
  eitherToPromise(value.decode((await promise).data))

export function api<T extends Props, ID extends keyof T>({
  baseUrl,
  value,
  id,
  idDecoder,
  resource,
  listValue = readonlyArray(value),
  urls = apiURLs(baseUrl, resource),
}: APIArgs<T, ID>): APIRepository<T, ID> {
  return {
    baseUrl,
    resource,
    value,
    listValue,
    urls,
    id,
    idDecoder,

    all: async () => {
      const result: TypeOf<typeof listValue> = await request(
        listValue,
        axios.get<TypeOf<typeof listValue>>(urls.all()),
      )
      typeInvariant(listValue, result)

      return result
    },

    one: async pid => {
      const result: TypeOf<typeof value> = await request(
        value,
        axios.get<TypeOf<typeof value>>(
          urls.one(typeInvariant(idDecoder, pid)),
        ),
      )
      typeInvariant(value, result)

      return result
    },

    create: async v => {
      // @TODO: typeInvariant(value without id, v)
      const result: TypeOf<typeof value> = await request(
        value,
        axios.post<TypeOf<typeof value>>(urls.create(), v),
      )
      typeInvariant(value, result)

      return result
    },

    edit: async v => {
      typeInvariant(value, v)
      const result: TypeOf<typeof value> = await request(
        value,
        axios.put<TypeOf<typeof value>>(urls.edit(v.id), v),
      )
      typeInvariant(value, result)

      return result
    },

    remove: async pid => {
      const result: TypeOf<typeof value> = await request(
        value,
        axios.delete(urls.remove(typeInvariant(idDecoder, pid))),
      )
      typeInvariant(value, result)

      return result
    },
  }
}
