import { Int, string, TypeOf, union } from 'technoidentity-spec'
import { cast, chop, verify } from 'technoidentity-utils'

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
  readonly paths?: string | readonly string[]
  readonly query?: string | Object
}

export function apiURLs({
  baseURL, // eg: 'https://localhost:3000'
  resource, // eg: 'todos'
}: URLsArgs): URLs {
  const base: string = chop(baseURL.trim())
  const res: string = resource.trim()

  verify(base.startsWith('http'))
  verify(!res.includes('/'))

  return {
    all: () => `${base}/${res}`,

    create: () => `${base}/${res}`,

    one: (id: ID) => {
      cast(idRT, id)
      return `${base}/${res}/${id}`
    },

    edit: (id: ID) => {
      cast(idRT, id)
      return `${base}/${res}/${id}`
    },

    remove: (id: ID) => {
      cast(idRT, id)
      return `${base}/${res}/${id}`
    },
  }
}
