import React from 'react'

export function useGET<T extends Object, P>(
  asyncFn: (param: P) => Promise<T>,
  param: P,
  // tslint:disable-next-line: readonly-array
): [T | undefined, Error | undefined] {
  const [data, setData] = React.useState<T | undefined>(undefined)
  const [error, setError] = React.useState<Error | undefined>(undefined)

  React.useEffect(() => {
    setData(undefined)
    setError(undefined)

    asyncFn(param)
      .then(setData)
      .catch(setError)
  }, [param])

  return [data, error]
}
