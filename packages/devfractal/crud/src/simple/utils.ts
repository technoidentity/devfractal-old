import { jsonStringify, timeout } from 'stp-utils/src'
import { format } from 'date-fns'
import { FormikHelpers } from 'formik'

export function formatDate(date: Date | undefined): string | undefined {
  return date && format(date, 'dd/MM/yyyy')
}

export function consoleSubmit<Values extends {}>(
  milliseconds: number = 0,
): (values: Values, formikArgs: FormikHelpers<Values>) => Promise<void> {
  return async (values, { setSubmitting }) =>
    timeout(milliseconds, () => {
      console.log(jsonStringify(values))
      setSubmitting(false)
    })
}
