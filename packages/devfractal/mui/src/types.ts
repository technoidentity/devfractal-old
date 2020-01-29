import { FieldConfig } from 'formik'

export type OmitForm<T> = Omit<T, 'form'>
export type FormikFieldConfig = Pick<FieldConfig, 'name' | 'validate'>
