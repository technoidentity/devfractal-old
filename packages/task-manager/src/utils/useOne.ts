import React from 'react'

export function useOne<T extends Object>(
  asyncFn: (id: string) => Promise<T>,
  id: string,
  // tslint:disable-next-line: readonly-array
): [T | undefined, Error | undefined] {
  const [data, setData] = React.useState<T | undefined>(undefined)
  const [error, setError] = React.useState<Error | undefined>(undefined)

  React.useEffect(() => {
    setData(undefined)
    setError(undefined)

    asyncFn(id)
      .then(setData)
      .catch(setError)
  }, [id])

  return [data, error]
}
