import { FormikHelpers } from 'formik'

export type SubmitAction<T> = (
  values: T,
  actions: FormikHelpers<T>,
) => Promise<void>

export type Action<Args> = (args: Args) => void
