import { useLoaderData } from '@remix-run/react'
import { deserialize } from 'superjson'

export function useGet<F extends (...args: any[]) => any>(): Required<
  Awaited<ReturnType<F>>
>['__srtp__type'] {
  const data = useLoaderData()
  return deserialize(data)
}
