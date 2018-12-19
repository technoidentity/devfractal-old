import { FormikActions, FormikErrors } from 'formik'
import axios from 'axios'

// Shouldn't be usually handling returned Promise, may be return void?
export async function consoleSubmit<Values>(
  values: Values,
  formikArgs: FormikActions<Values>,
): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      // tslint:disable-next-line:no-console
      console.log(JSON.stringify(values, null, 2))
      formikArgs.setSubmitting(false)
      resolve()
    }, 0)
  })
}

// @TODO: use ky, handle asynchronous validation in form here?

interface APISubmitArgs<Values> {
  readonly url: string
  errorsTransformer?(errors: unknown): FormikErrors<Values>
  responseTransformer?(response: unknown): Values
  valuesTransformer?(values: Values): object
}

const id: (x: any) => any = x => x

type APISubmitResult<Values extends {}> = (
  values: Values,
  formikArgs: FormikActions<Values>,
) => Promise<any>

// Need to create Either and AsynchronousEither
// Shouldn't be usually handling returned Promise, may be return void?
export function apiSubmit<Values extends {}>({
  url,
  valuesTransformer = id,
  responseTransformer = id,
  errorsTransformer = id,
}: APISubmitArgs<Values>): APISubmitResult<Values> {
  return async (values, formikArgs) => {
    try {
      const response: Values = responseTransformer(
        await axios.post(url, valuesTransformer(values)),
      )
      formikArgs.setValues(response)
      return response
    } catch (errors) {
      const err: FormikErrors<Values> = errorsTransformer(errors)
      formikArgs.setErrors(err)
      return Promise.reject(err)
    }
  }
}
