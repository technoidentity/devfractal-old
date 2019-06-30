import React from 'react'
import { AnyTuple } from 'typelevel-ts'

interface AsyncResult<T extends Object> {
  readonly data: T | undefined
  readonly error: Error | undefined
  fetch(): void
}
export function useAsync<T extends Object, P extends AnyTuple>(
  asyncFn: (...param: P) => Promise<T>,
  param: P,
  // tslint:disable-next-line: readonly-array
): AsyncResult<T> {
  const [data, setData] = React.useState<T | undefined>(undefined)
  const [error, setError] = React.useState<Error | undefined>(undefined)
  const [fetchAgain, setFetchAgain] = React.useState(0)

  React.useEffect(() => {
    setData(undefined)
    setError(undefined)

    asyncFn(...param)
      .then(setData)
      .catch(setError)
  }, [param, fetchAgain])

  const fetch = () => setFetchAgain(count => count + 1)

  return { data, error, fetch }
}
