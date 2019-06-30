import React from 'react'

export function useMany<T, P>(
  asyncFn: (params: P) => Promise<ReadonlyArray<T>>,
  params: P,
  // tslint:disable-next-line: readonly-array
): [ReadonlyArray<T> | undefined, Error | undefined] {
  const [data, setData] = React.useState<ReadonlyArray<T> | undefined>(
    undefined,
  )
  const [error, setError] = React.useState<Error | undefined>(undefined)

  React.useEffect(() => {
    asyncFn(params)
      .then(setData)
      .catch(setError)
  }, [params])

  return [data, error]
}
