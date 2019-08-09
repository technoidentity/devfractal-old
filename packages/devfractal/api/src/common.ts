import { FormikActions } from 'formik'

export type SubmitAction<T> = (
  values: T,
  actions: FormikActions<T>,
) => Promise<void>

export type Action<Args> = (args: Args) => void
