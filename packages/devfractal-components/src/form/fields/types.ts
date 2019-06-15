import { FieldConfig } from 'formik'

export type OmitForm<T> = Omit<T, 'form'>
export type FormikFieldConfig = Omit<FieldConfig, 'innerRef'>
