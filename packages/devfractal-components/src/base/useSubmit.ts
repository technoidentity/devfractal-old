import React from 'react'
import { useRouter } from './RouterUtils'

export interface SubmitResult<T extends Object> {
  readonly serverError: string | undefined
  onSubmit(data: T): Promise<void>
}

export function useSubmit<T extends Object>(
  f: (formValues: T) => Promise<T>,
  redirectURL?: string,
  // tslint:disable-next-line: readonly-array
): SubmitResult<T> {
  const [serverError, setServerError] = React.useState<string | undefined>(
    undefined,
  )

  const { history } = useRouter()

  async function onSubmit(data: T): Promise<void> {
    f(data)
      .then(() => redirectURL && history.push(redirectURL))
      .catch(err => setServerError(err.response.data.error))
  }

  return { serverError, onSubmit }
}
