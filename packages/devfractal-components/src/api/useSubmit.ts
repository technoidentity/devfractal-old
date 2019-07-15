import { FormikActions } from 'formik'
import React from 'react'
import { useRouter } from '../lib'

export interface SubmitResult<T extends Object> {
  readonly serverError: string | undefined
  onSubmit(data: T, actions: FormikActions<T>): Promise<void>
}

export function useSubmit<T extends Object>(
  f: (formValues: T) => Promise<T>,
  onSuccess: (values: T, actions: FormikActions<T>) => void,
  onFailure?: (err: any, actions: FormikActions<T>) => void,
): SubmitResult<T> {
  const [serverError, setServerError] = React.useState<string | undefined>(
    undefined,
  )

  async function onSubmit(data: T, actions: FormikActions<T>): Promise<void> {
    // tslint:disable-next-line: no-floating-promises
    f(data)
      .then(values => onSuccess(values, actions))
      .catch(err => {
        if (err && err.response && err.response.data) {
          setServerError(err.response.data.error)
        }
        if (onFailure) {
          onFailure(err, actions)
        }
      })
      .finally(() => actions.setSubmitting(false))
  }

  return { serverError, onSubmit }
}

export function useRedirect(redirectURL?: string): { onRedirect(): void } {
  const { history } = useRouter()

  return {
    onRedirect: () => {
      if (redirectURL) {
        history.push(redirectURL)
      }
    },
  }
}

export function useSubmitRedirect<T extends Object>(
  f: (formValues: T) => Promise<T>,
  redirectURL?: string,
): SubmitResult<T> {
  const { onRedirect } = useRedirect(redirectURL)
  return useSubmit(f, onRedirect)
}

export function useSubmitReset<T extends Object>(
  f: (formValues: T) => Promise<T>,
  noReset?: boolean,
): SubmitResult<T> {
  return useSubmit(f, (_, actions) => {
    if (!noReset) {
      actions.resetForm()
    }
  })
}
