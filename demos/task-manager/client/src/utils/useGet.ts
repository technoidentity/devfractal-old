import React from 'react'
import { AnyTuple } from 'typelevel-ts'

interface AsyncResult<T extends Object> {
  readonly data: T | undefined
  readonly error: Error | undefined
  refresh(): void
}

export function useGet<T extends Object, P extends AnyTuple>(
  asyncFn: (...param: P) => Promise<T>,
  param: P,
  // tslint:disable-next-line: readonly-array
): AsyncResult<T> {
  const [data, setData] = React.useState<T | undefined>(undefined)
  const [error, setError] = React.useState<Error | undefined>(undefined)
  const [fetchAgain, setFetchAgain] = React.useState(0)
  const mounted = React.useRef(false)

  React.useEffect(() => {
    setData(undefined)
    setError(undefined)

    mounted.current = true
    asyncFn(...param)
      .then(data => mounted.current && setData(data))
      .catch(error => mounted.current && setError(error))

    return () => {
      mounted.current = false
    }
  }, [param, fetchAgain])

  const fetch = () => setFetchAgain(count => (count + 1) % 100)

  return { data, error, refresh: fetch }
}
