import axios from 'axios'
import { FormikActions, FormikErrors } from 'formik'
import { jsonStringify } from '../lib'

export function consoleSubmit<Values extends object>(
  milliseconds: number = 0,
): (values: Values, formikArgs: FormikActions<Values>) => Promise<void> {
  return async (values, { setSubmitting }) =>
    new Promise(resolve =>
      setTimeout(() => {
        // tslint:disable-next-line: no-console
        console.log(jsonStringify(values))
        setSubmitting(false)
        resolve()
      }, milliseconds),
    )
}

interface APISubmitArgs<Values, Result extends Values> {
  readonly url: string
  readonly action?: 'post' | 'put'
  readonly noResetOnSubmit?: boolean
  errorsTransformer?(errors: unknown): FormikErrors<Values>
  responseTransformer?(response: unknown): Result
  valuesTransformer?(values: Values): unknown
}

const id: (x: unknown) => any = x => x

type APISubmitResult<Values extends {}, Result extends Values> = (
  values: Values,
  actions: FormikActions<Values>,
) => Promise<Result>

export type ApiSubmitAction = 'post' | 'put'
// Need to create Either and AsynchronousEither
export function apiSubmit<Values extends {}, Result extends Values = Values>({
  url,
  action = 'post',
  noResetOnSubmit = false,
  valuesTransformer = id,
  responseTransformer = id,
  errorsTransformer = id,
}: APISubmitArgs<Values, Result>): APISubmitResult<Values, Result> {
  return async (values, { setValues, setErrors, setSubmitting, resetForm }) => {
    try {
      // Should handle the erroneous scenario, output keys aren't a subset of input
      const data: Values =
        action === 'post'
          ? (await axios.post(url, valuesTransformer(values))).data
          : (await axios.put(url, valuesTransformer(values))).data

      const response: Result = responseTransformer(data)
      setValues(response)
      setSubmitting(false)

      if (!noResetOnSubmit) {
        resetForm()
      }
      return response
    } catch (errors) {
      const err: FormikErrors<Values> = errorsTransformer(errors)
      setErrors(err)
      setSubmitting(false)
      return Promise.reject(err)
    }
  }
}
