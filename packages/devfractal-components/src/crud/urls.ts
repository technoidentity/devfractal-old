import { chop, invariant, typeInvariant } from '@technoidentity/utils'
import { Int, string, TypeOf, union } from 'io-ts'

// tslint:disable-next-line: typedef
const idRT = union([Int, string])

type ID = TypeOf<typeof idRT>

export interface URLs {
  all(): string
  create(): string
  one(id: ID): string
  edit(id: ID): string
  remove(id: ID): string
}

interface URLsArgs {
  readonly baseURL: string
  readonly resource: string
  readonly paths?: string | ReadonlyArray<string>
  readonly query?: string | Object
}

export function apiURLs({
  baseURL, // eg: 'https://localhost:3000'
  resource, // eg: 'todos'
}: URLsArgs): URLs {
  const base: string = chop(baseURL.trim())
  const res: string = resource.trim()

  invariant(base.startsWith('http'))
  invariant(!res.includes('/'))

  return {
    all: () => `${base}/${res}`,

    create: () => `${base}/${res}`,

    one: (id: ID) => {
      typeInvariant(idRT, id)
      return `${base}/${res}/${id}`
    },

    edit: (id: ID) => {
      typeInvariant(idRT, id)
      return `${base}/${res}/${id}`
    },

    remove: (id: ID) => {
      typeInvariant(idRT, id)
      return `${base}/${res}/${id}`
    },
  }
}
