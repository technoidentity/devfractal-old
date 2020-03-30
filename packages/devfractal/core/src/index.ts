import { FormikHelpers } from 'formik'
import { jsonStringify, timeout } from 'srtp-utils'

export * from './api'
export * from './crud'
export * from './router'
export * from './ui'
export * from './validations'

export function consoleSubmit<Values extends {}>(
  milliseconds: number = 0,
): (values: Values, formikArgs: FormikHelpers<Values>) => Promise<void> {
  return async (values, { setSubmitting }) =>
    timeout(milliseconds, () => {
      console.log(jsonStringify(values))
      setSubmitting(false)
    })
}
