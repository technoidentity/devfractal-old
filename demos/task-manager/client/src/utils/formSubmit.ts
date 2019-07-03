import { FormikActions } from 'formik'

export function formSubmit<Values>(
  onSubmit: (values: Values) => Promise<void>,
): (value: Values, actions: FormikActions<Values>) => Promise<void> {
  return async (values, actions) => {
    try {
      await onSubmit(values)
    } finally {
      actions.setSubmitting(false)
    }
  }
}
