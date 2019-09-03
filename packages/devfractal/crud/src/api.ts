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

export function simpleAPI<Spec extends Mixed, ID extends keyof TypeOf<Spec>>({
  baseURL,
  spec,
  id,
  resource,
  paths = apiURLs({ baseURL, resource }),
}: APIArgs<Spec, ID>): APIRepository<Spec, ID> {
  const listSpec = readonlyArray(spec)

  async function all() {
    const result: TypeOf<typeof listSpec> = await request(
      listSpec,
      axios.get<TypeOf<typeof listSpec>>(paths.all()),
    )
    return cast(listSpec, result)
  }

  async function one(pid: any) {
    const result: TypeOf<typeof spec> = await request(
      spec,
      axios.get<TypeOf<typeof spec>>(paths.one(pid)),
    )
    return cast(spec, result)
  }

  async function create(v: any) {
    // @TODO: cast(value without id, v)
    const result: TypeOf<typeof spec> = await request(
      spec,
      axios.post<TypeOf<typeof spec>>(paths.create(), v),
    )
    return cast(spec, result)
  }

  async function edit(v: any) {
    cast(spec, v)
    const result: TypeOf<typeof spec> = await request(
      spec,
      axios.put<TypeOf<typeof spec>>(paths.edit(v.id), v),
    )
    return cast(spec, result)
  }

  async function remove(pid: any) {
    const result: TypeOf<typeof spec> = await request(
      spec,
      axios.delete(paths.remove(pid)),
    )
    return cast(spec, result)
  }

  return {
    baseURL,
    resource,
    spec,
    paths,
    id,
    all,
    remove,
    create,
    edit,
    one,
  }
}
