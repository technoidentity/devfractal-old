import { FieldConfig } from 'formik'
import { Omit } from 'utils'

export type OmitForm<T> = Omit<T, 'form'>
export type FormikFieldConfig = Omit<FieldConfig, 'innerRef'>
