import { FieldConfig } from 'formik'
import { Omit } from '../../lib'

export type OmitForm<T> = Omit<T, 'form'>
export type FormikFieldConfig = Omit<FieldConfig, 'innerRef'>
