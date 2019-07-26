import { Field as FormikField, FieldProps as FormikFieldProps } from 'formik';
import React from 'react';
import { Select, SelectProps } from 'technoidentity-devfractal-ui';
import { FormikFieldConfig, OmitForm } from './types';

type FormikSelectProps<V> = FormikFieldProps<V> & OmitForm<SelectProps>;

const FormikSelect: <V>(props: FormikSelectProps<V>) => JSX.Element = ({
  form,
  field,
  children,
  ...props
}) => (
  <Select {...props} {...field}>
    {children}
  </Select>
);

export type SelectFieldProps = SelectProps & FormikFieldConfig;

export const SelectField: React.FC<SelectFieldProps> = ({
  children,
  ...props
}) => (
  <FormikField {...props} component={FormikSelect}>
    {children}
  </FormikField>
);
