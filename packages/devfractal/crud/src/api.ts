import axios, { AxiosPromise } from 'axios'
import {
  Mixed,
  readonlyArray,
  ReadonlyArrayC,
  Type,
  TypeOf,
} from 'technoidentity-spec'
import { cast, toPromise } from 'technoidentity-utils'
import { apiURLs, URLs } from './urls'

// tslint:disable typedef

export interface Repository<
  T extends Record<string, any>,
  ID extends keyof T,
  V extends number | string = T[ID]
> {
  all(): Promise<ReadonlyArray<T>>
  create(value: Omit<T, ID>): Promise<T>
  one(id: V): Promise<T>
  edit(value: T): Promise<T>
  remove(id: V): Promise<T>
}

export interface APIArgs<RT extends Mixed, ID extends keyof TypeOf<RT>> {
  readonly baseURL: string
  readonly value: RT
  readonly id: ID
  readonly resource: string
  readonly listValue?: ReadonlyArrayC<RT>
  readonly urls?: URLs
}

export interface APIRepository<RT extends Mixed, ID extends keyof TypeOf<RT>>
  extends Repository<TypeOf<RT>, ID>,
    Required<APIArgs<RT, ID>> {}

const request: <A>(
  value: Type<A>,
  promise: AxiosPromise<A>,
) => Promise<A> = async (value, promise) =>
  toPromise(value.decode((await promise).data))

export function api<RT extends Mixed, ID extends keyof TypeOf<RT>>({
  baseURL,
  value,
  id,
  resource,
  listValue = readonlyArray(value),
  urls = apiURLs({ baseURL, resource }),
}: APIArgs<RT, ID>): APIRepository<RT, ID> {
  async function all() {
    const result: TypeOf<typeof listValue> = await request(
      listValue,
      axios.get<TypeOf<typeof listValue>>(urls.all()),
    )
    cast(listValue, result)

    return result
  }

  async function one(pid: any) {
    const result: TypeOf<typeof value> = await request(
      value,
      axios.get<TypeOf<typeof value>>(urls.one(pid)),
    )
    cast(value, result)

    return result
  }

  async function create(v: any) {
    // @TODO: cast(value without id, v)
    const result: TypeOf<typeof value> = await request(
      value,
      axios.post<TypeOf<typeof value>>(urls.create(), v),
    )
    cast(value, result)

    return result
  }

  async function edit(v: any) {
    cast(value, v)
    const result: TypeOf<typeof value> = await request(
      value,
      axios.put<TypeOf<typeof value>>(urls.edit(v.id), v),
    )
    cast(value, result)

    return result
  }

  async function remove(pid: any) {
    const result: TypeOf<typeof value> = await request(
      value,
      axios.delete(urls.remove(pid)),
    )
    cast(value, result)

    return result
  }

  return {
    baseURL,
    resource,
    value,
    listValue,
    urls,
    id,
    all,
    remove,
    create,
    edit,
    one,
  }
}
