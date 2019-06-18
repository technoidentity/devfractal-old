import axios from 'axios'
import * as t from 'io-ts'
import * as tp from 'io-ts-promise'
import { reporter } from 'io-ts-reporters'

interface API<A> {
  all(): Promise<readonly A[]>
  create(data: Pick<A, Exclude<keyof A, '_id'>>): Promise<A>
  one(id: string): Promise<A>
  update(id: string, data: A): Promise<A>
}

export function api<I, A>(
  url: string,
  type: t.Mixed & t.Decoder<I, A>,
): API<A> {
  return {
    async all(): Promise<ReadonlyArray<A>> {
      return axios
        .get(url)
        .then(res => tp.decode(t.readonlyArray(type), res.data))
    },

    async create(data: A): Promise<A> {
      const decoded = type.decode(data)
      if (decoded.isLeft()) {
        throw new Error(reporter(decoded).join('\n'))
      }
      return axios.post(url, data).then(res => tp.decode(type, res.data))
    },

    async one(id: string): Promise<A> {
      return axios.get(url + id).then(res => tp.decode(type, res.data))
    },

    async update(id: string, data: A): Promise<A> {
      const decoded = type.decode(data)
      if (decoded.isLeft()) {
        throw new Error(reporter(decoded).join('\n'))
      }
      return axios.put(url + id, data).then(res => tp.decode(type, res.data))
    },
  }
}
