import axios, { AxiosPromise } from 'axios'
import { Mixed, readonlyArray, Type, TypeOf } from 'technoidentity-spec'
import { cast, toPromise } from 'technoidentity-utils'
import { apiURLs, URLs } from './urls'

// tslint:disable typedef

export interface APIArgs<Spec extends Mixed, ID extends keyof TypeOf<Spec>> {
  readonly baseURL: string
  readonly spec: Spec
  readonly id: ID
  readonly resource: string
  readonly paths?: URLs
}

export interface APIRepository<
  Spec extends Mixed,
  ID extends keyof TypeOf<Spec>
> extends APIArgs<Spec, ID> {
  all(): Promise<ReadonlyArray<TypeOf<Spec>>>
  create(value: Omit<TypeOf<Spec>, ID>): Promise<TypeOf<Spec>>
  one(id: ID): Promise<TypeOf<Spec>>
  edit(value: TypeOf<Spec>): Promise<TypeOf<Spec>>
  remove(id: ID): Promise<TypeOf<Spec>>
}

const request: <A>(
  spec: Type<A>,
  promise: AxiosPromise<A>,
) => Promise<A> = async (value, promise) =>
  toPromise(value.decode((await promise).data))

export function simpleAPI<RT extends Mixed, ID extends keyof TypeOf<RT>>({
  baseURL,
  spec,
  id,
  resource,
  paths: urls = apiURLs({ baseURL, resource }),
}: APIArgs<RT, ID>): APIRepository<RT, ID> {
  const listValue = readonlyArray(spec)

  async function all() {
    const result: TypeOf<typeof listValue> = await request(
      listValue,
      axios.get<TypeOf<typeof listValue>>(urls.all()),
    )
    cast(listValue, result)

    return result
  }

  async function one(pid: any) {
    const result: TypeOf<typeof spec> = await request(
      spec,
      axios.get<TypeOf<typeof spec>>(urls.one(pid)),
    )
    cast(spec, result)

    return result
  }

  async function create(v: any) {
    // @TODO: cast(value without id, v)
    const result: TypeOf<typeof spec> = await request(
      spec,
      axios.post<TypeOf<typeof spec>>(urls.create(), v),
    )
    cast(spec, result)

    return result
  }

  async function edit(v: any) {
    cast(spec, v)
    const result: TypeOf<typeof spec> = await request(
      spec,
      axios.put<TypeOf<typeof spec>>(urls.edit(v.id), v),
    )
    cast(spec, result)

    return result
  }

  async function remove(pid: any) {
    const result: TypeOf<typeof spec> = await request(
      spec,
      axios.delete(urls.remove(pid)),
    )
    cast(spec, result)

    return result
  }

  return {
    baseURL,
    resource,
    spec,
    paths: urls,
    id,
    all,
    remove,
    create,
    edit,
    one,
  }
}
