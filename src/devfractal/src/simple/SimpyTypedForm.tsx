import { Field, Form, Formik } from 'formik'
import React from 'react'
import { Omit } from 'react-router'
import yup from 'yup'
import {
  camelCaseToPhrase,
  CheckboxField,
  consoleSubmit,
  ErrorField,
  InputField,
  InputFieldProps,
  Label,
  RadioGroupField,
  SelectField,
  TextAreaField,
} from '../lib'
import {
  SimpleCheckboxProps,
  SimpleFormProps,
  SimpleRadioGroupProps,
  SimpleSelectProps,
  SimpleTextAreaProps,
} from './internal'
interface Named<Values extends object, Value> {
  readonly name: keyof Values & string
  readonly value?: Value
}

// @TODO: value must by typed!
interface SimpleInputProps<
  Values extends object,
  Value extends string | number | ReadonlyArray<string>
> extends Omit<InputFieldProps, 'name' | 'value'>, Named<Values, Value> {
  readonly schema: yup.Schema<Value>
  readonly label?: string
  readonly validations?: ReadonlyArray<
    (schema: yup.Schema<Value>) => yup.Schema<Value>
  >
}

interface GenericInputProps<
  Values extends object,
  Value extends string | number | ReadonlyArray<string>
> extends Omit<SimpleInputProps<Values, Value>, 'type' | 'schema'> {}

function SimpleInput<
  Values extends object,
  Value extends string | number | string[]
>(args: SimpleInputProps<Values, Value>): JSX.Element {
  const { schema, label, validations, value, ...props } = args
  return (
    <Field>
      <Label>{label || camelCaseToPhrase(props.name)}</Label>
      <InputField value={value} {...props} />
      <ErrorField name={props.name} />
    </Field>
  )
}

export interface TypedFormChildren<Values extends object> {
  readonly Text: React.FC<GenericInputProps<Values, string>>
  readonly Number: React.FC<GenericInputProps<Values, number>>
  readonly Password: React.FC<GenericInputProps<Values, string>>
  readonly Email: React.FC<GenericInputProps<Values, string>>
  readonly Telephone: React.FC<GenericInputProps<Values, number>>
  readonly Url: React.FC<GenericInputProps<Values, string>>
  readonly Checkbox: React.FC<SimpleCheckboxProps<Values>>
  readonly RadioGroup: React.FC<SimpleRadioGroupProps<Values>>
  readonly TextArea: React.FC<SimpleTextAreaProps<Values>>
  readonly Select: React.FC<SimpleSelectProps<Values>>
  // readonly Nested: React.FC<SimpleFormProps<Values>>
}

export interface TypedFormProps<Values extends object>
  extends SimpleFormProps<Values> {
  children(simple: TypedFormChildren<Values>): React.ReactNode
}

export function TypedForm<Values extends object>(
  props: TypedFormProps<Values>,
): JSX.Element {
  const childArgs: TypedFormChildren<Values> = {
    Text: props => <SimpleInput {...props} type="text" schema={yup.string()} />,

    Number: props => (
      <SimpleInput schema={yup.number()} {...props} type="number" />
    ),

    Password: props => (
      <SimpleInput schema={yup.string()} {...props} type="password" />
    ),

    Email: props => (
      <SimpleInput {...props} type="email" schema={yup.string()} />
    ),

    // @TODO: I think Telephone shouldn't be no?
    Telephone: props => (
      <SimpleInput schema={yup.number()} {...props} type="tel" />
    ),

    Url: props => <SimpleInput schema={yup.string()} {...props} type="url" />,

    Checkbox: ({ children, noLabel, ...props }) => (
      <Field>
        <CheckboxField {...props}>
          {children || (noLabel && ` camelCaseToPhrase(props.name)`)}
        </CheckboxField>
        <ErrorField name={props.name} />
      </Field>
    ),

    RadioGroup: ({ children, ...props }) => (
      <Field>
        <RadioGroupField {...props}>{children}</RadioGroupField>
        <ErrorField name={props.name} />
      </Field>
    ),

    Select: ({ children, ...props }) => (
      <Field>
        <SelectField {...props}>{children}</SelectField>
        <ErrorField name={props.name} />
      </Field>
    ),

    TextArea: ({ label, ...props }) => (
      <Field>
        <Label>{label}</Label>
        <TextAreaField {...props} />
        <ErrorField name={props.name} />
      </Field>
    ),
  }

  const { initialValues, validationSchema, onSubmit, children } = props

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit || consoleSubmit(0)}
    >
      <Form>{children(childArgs)}</Form>
    </Formik>
  )
}

// // tslint:disable-next-line:typedef
// const initialValues = { userName: '', password: '' }

// const LoginForm: React.SFC = () => {
//   return (
//     <TypedForm
//       initialValues={initialValues}
//       onSubmit={values => console.log(values)}
//     >
//       {Simple => (
//         <>
//           <Simple.Text name="userName" />
//           <Simple.Password name="password" />
//         </>
//       )}
//     </TypedForm>
//   )
// }
