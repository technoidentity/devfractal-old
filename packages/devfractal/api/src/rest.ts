import { produce } from 'immer'
import * as t from 'io-ts'
import { cast } from 'technoidentity-utils'
import { http as httpAPI, MethodArgs, RequestConfig } from './http'

type APIMethodArgs = Omit<MethodArgs, 'resource'>
export interface API<Spec extends t.Mixed> {
  many(options?: APIMethodArgs): Promise<ReadonlyArray<t.TypeOf<Spec>>>
  one(options?: APIMethodArgs): Promise<t.TypeOf<Spec>>
  create(
    data: t.InputOf<Spec>,
    options?: APIMethodArgs,
  ): Promise<t.TypeOf<Spec>>
  get(id: string, options?: APIMethodArgs): Promise<t.TypeOf<Spec>>
  update(
    id: string,
    data: t.InputOf<Spec>,
    options?: APIMethodArgs,
  ): Promise<t.TypeOf<Spec>>
  del(id: string, options?: APIMethodArgs): Promise<void>
}

function appendId(options: MethodArgs, id: string): MethodArgs {
  return produce(options, draft => {
    if (draft.path === undefined) {
      draft.path = id
    } else if (t.UnknownArray.is(draft.path)) {
      draft.path.unshift(id)
    } else {
      draft.path = [id, draft.path]
    }
  })
}

interface RestArgs extends RequestConfig {
  readonly resource: string
}

export function rest<Spec extends t.Mixed>(
  spec: Spec,
  { resource, ...options }: RestArgs,
): API<Spec> {
  const http: ReturnType<typeof httpAPI> = httpAPI(options)

  async function many(
    options: APIMethodArgs,
  ): Promise<ReadonlyArray<t.TypeOf<Spec>>> {
    // @TODO: cast to t.Mixed looks safe
    return http.get({ ...options, resource }, t.readonlyArray(spec))
  }

  async function one(options: APIMethodArgs): Promise<t.TypeOf<Spec>> {
    return http.get({ ...options, resource }, spec)
  }

  async function create(
    data: t.InputOf<Spec>,
    options: APIMethodArgs,
  ): Promise<t.TypeOf<Spec>> {
    cast(spec, data)

    return http.post({ ...options, resource }, data, spec)
  }

  async function del(id: string, options?: APIMethodArgs): Promise<void> {
    return http.del(appendId({ ...options, resource }, id))
  }

  async function get(
    id: string,
    options: APIMethodArgs,
  ): Promise<t.TypeOf<Spec>> {
    return one(appendId({ ...options, resource }, id))
  }

  async function update(
    id: string,
    data: t.InputOf<Spec>,
    options: APIMethodArgs,
  ): Promise<t.TypeOf<Spec>> {
    cast(spec, data)

    return http.put(appendId({ ...options, resource }, id), data, spec)
  }

  return { one, many, get, update, create, del }
}
