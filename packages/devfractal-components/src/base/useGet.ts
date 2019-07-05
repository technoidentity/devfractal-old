import React from 'react'
import { AnyTuple } from 'typelevel-ts'

interface AsyncResult<T extends Object> {
  readonly data: T | undefined
  readonly error: Error | undefined
  refresh(): void
}

export function useGet<T extends Object, P extends AnyTuple>(
  asyncFn: (...params: P) => Promise<T>,
  ...deps: P
): // tslint:disable-next-line: readonly-array
AsyncResult<T> {
  const [data, setData] = React.useState<T | undefined>(undefined)
  const [error, setError] = React.useState<Error | undefined>(undefined)
  const [fetchAgain, setFetchAgain] = React.useState(0)
  const mounted: React.MutableRefObject<boolean> = React.useRef(false)

  React.useEffect(() => {
    // tslint:disable-next-line: no-object-mutation
    mounted.current = true
    setData(undefined)
    setError(undefined)

    asyncFn(...deps)
      .then(data => mounted.current && setData(data))
      .catch(error => mounted.current && setError(error))

    return () => {
      // tslint:disable-next-line: no-object-mutation
      mounted.current = false
    }
  }, [...deps, fetchAgain])

  const fetch: () => void = () => setFetchAgain(count => (count + 1) % 100)

  return { data, error, refresh: fetch }
}
