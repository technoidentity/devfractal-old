import React from 'react'
import { AnyTuple } from 'typelevel-ts'

export function useGET<T extends Object, P extends AnyTuple>(
  asyncFn: (...param: P) => Promise<T>,
  param: P,
  // tslint:disable-next-line: readonly-array
): [T | undefined, Error | undefined, () => void] {
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

  return [data, error, fetch]
}
