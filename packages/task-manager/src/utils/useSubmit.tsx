import React from 'react'
import { useRouter } from './RouterUtils'

export function useSubmit<T>(
  url: string,
  f: (data: T) => Promise<T>,
  // tslint:disable-next-line: readonly-array
): [string | undefined, (data: T) => Promise<void>] {
  const [serverError, setServerError] = React.useState<string | undefined>(
    undefined,
  )
  const { history } = useRouter()

  const onSubmit = async (data: T) =>
    f(data)
      .then(() => history.push(url))
      .catch(err => setServerError(err.response.data.message))

  return [serverError, onSubmit]
}
