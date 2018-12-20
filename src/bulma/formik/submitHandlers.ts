import { FormikActions, FormikErrors } from 'formik'
import axios from 'axios'

export function consoleSubmit<Values>(
  millis: number = 0,
): (values: Values, formikArgs: FormikActions<Values>) => Promise<void> {
  return async (values, { setSubmitting }) =>
    new Promise(resolve =>
      setTimeout(() => {
        // tslint:disable-next-line:no-console
        console.log(JSON.stringify(values, null, 2))
        setSubmitting(false)
        resolve()
      }, millis),
    )
}

interface APISubmitArgs<Values, Result extends Values> {
  readonly url: string
  readonly noReset?: boolean
  errorsTransformer?(errors: unknown): FormikErrors<Values>
  responseTransformer?(response: unknown): Result
  valuesTransformer?(values: Values): unknown
}

const id: (x: unknown) => any = x => x

type APISubmitResult<Values extends {}, Result extends Values> = (
  values: Values,
  formikArgs: FormikActions<Values>,
) => Promise<Result>

// Need to create Either and AsynchronousEither
export function apiSubmit<Values extends {}, Result extends Values = Values>({
  url,
  noReset,
  valuesTransformer = id,
  responseTransformer = id,
  errorsTransformer = id,
}: APISubmitArgs<Values, Result>): APISubmitResult<Values, Result> {
  return async (values, { setValues, setErrors, setSubmitting, resetForm }) => {
    try {
      // Should handle the erroneous scenario, output keys aren't a subset of input
      const response: Result = responseTransformer(
        (await axios.post(url, valuesTransformer(values))).data,
      )
      setValues(response)
      setSubmitting(false)
      if (!noReset) {
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
