import React from 'react'
import { useRouter } from './RouterUtils'

export interface SubmitResult<T extends Object> {
  readonly serverError: string | undefined
  onSubmit(data: T): Promise<void>
}

export function useSubmit<T extends Object>(
  url: string,
  f: (data: T) => Promise<T>,
  // tslint:disable-next-line: readonly-array
): SubmitResult<T> {
  const [serverError, setServerError] = React.useState<string | undefined>(
    undefined,
  )
  const { history } = useRouter()

  async function onSubmit(data: T): Promise<void> {
    f(data)
      .then(() => history.push(url))
      .catch(err => setServerError(err.response.data.error))
  }

  return { serverError, onSubmit }
}
