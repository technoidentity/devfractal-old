import { useHistory } from 'devfractal-router'
import { FormikActions } from 'formik'
import { History } from 'history'
import React from 'react'
import { SubmitAction } from './common'

export interface SubmitResult<T extends {}> {
  readonly serverError: string | undefined
  readonly onSubmit: SubmitAction<T>
}

export function useSubmit<T extends {}>(
  asyncFn: (formValues: T) => Promise<T>,
  onSuccess: (values: T, actions: FormikActions<T>) => void,
  onFailure?: (err: any, actions: FormikActions<T>) => void,
): SubmitResult<T> {
  const [serverError, setServerError] = React.useState<string | undefined>(
    undefined,
  )

  async function onSubmit(values: T, actions: FormikActions<T>): Promise<void> {
    return asyncFn(values)
      .then(values => onSuccess(values, actions))
      .catch(err => {
        if (err && err.response && err.response.data) {
          setServerError(err.response.data.error)
          if (onFailure) {
            onFailure(err, actions)
          }
        } else if (onFailure) {
          onFailure(err, actions)
        } else {
          throw err
        }
      })
      .finally(() => actions.setSubmitting(false))
  }

  return { serverError, onSubmit }
}

export function useRedirect(): { onRedirect(path?: string): void } {
  const history: History = useHistory()

  return {
    onRedirect: (path?: string) => {
      if (path) {
        history.push(path)
      }
    },
  }
}

export function useSubmitRedirect<T extends {}>(
  asyncFn: (formValues: T) => Promise<T>,
  redirectTo?: string,
): SubmitResult<T> {
  const { onRedirect } = useRedirect()
  return useSubmit(asyncFn, () => onRedirect(redirectTo))
}

export function useSubmitReset<T extends {}>(
  asyncFn: (formValues: T) => Promise<T>,
  noReset?: boolean,
): SubmitResult<T> {
  return useSubmit(asyncFn, (values, actions) => {
    actions.setValues(values)
    if (!noReset) {
      actions.resetForm()
    }
  })
}
