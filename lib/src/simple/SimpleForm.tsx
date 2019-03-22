import { Form, Formik, FormikActions, FormikConsumer } from 'formik'
import React from 'react'
import {
  number,
  NumberSchema,
  ObjectSchema,
  Schema,
  string,
  StringSchema,
} from 'yup'
import {
  Button,
  camelCaseToPhrase,
  CheckboxField,
  CheckboxFieldProps,
  consoleSubmit,
  DebugField,
  ErrorField,
  Field,
  InputField,
  InputFieldProps,
  Label,
  Omit,
  RadioFieldProps,
  RadioGroupField,
  SelectField,
  SelectFieldProps,
  TextAreaField,
  TextAreaFieldProps,
} from '../index'

interface Named<Values extends object> {
  readonly name: keyof Values & string
}

// @TODO: value must by typed!
interface SimpleInputProps<Values extends object, S extends Schema<any>>
  extends Omit<InputFieldProps, 'name'>,
    Named<Values> {
  readonly schema: S
  readonly label?: string
  readonly validations?: ReadonlyArray<(schema: S) => S>
}

interface GenericInputProps<Values extends object, S extends Schema<any>>
  extends Omit<SimpleInputProps<Values, S>, 'type' | 'schema'> {}

// & ValidationProps

function validator<S extends Schema<any>>(
  initialSchema: S,
  validations?: ReadonlyArray<(schema: S) => S>,
): <V>(value: V) => V | undefined {
  return value => {
    if (validations === undefined) {
      return undefined
    }

    let schema: S = initialSchema
    validations.forEach(v => (schema = v(schema)))

    try {
      schema.validateSync(value)
      return undefined
    } catch (err) {
      return err.message
    }
  }
}

function SimpleInput<Values extends object, S extends Schema<any>>(
  args: SimpleInputProps<Values, S>,
): JSX.Element {
  const { schema, label, validations, ...props } = args
  return (
    <Field>
      <Label>{label || camelCaseToPhrase(props.name)}</Label>
      <InputField {...props} validate={validator(schema, validations)} />
      <ErrorField name={props.name} />
    </Field>
  )
}

export interface SimpleCheckboxProps<Values extends object>
  extends Omit<CheckboxFieldProps, 'name'>,
    Named<Values> {
  readonly noLabel?: boolean
}

export interface SimpleRadioGroupProps<Values extends object>
  extends Omit<RadioFieldProps, 'name'>,
    Named<Values> {}

export interface SimpleSelectProps<Values extends object>
  extends Omit<SelectFieldProps, 'name'>,
    Named<Values> {}

export interface SimpleTextAreaProps<Values extends object>
  extends Omit<TextAreaFieldProps, 'name'>,
    Named<Values> {
  readonly name: keyof Values & string
  readonly label: string
}

export interface SimpleFormButtonsProps {
  readonly submit?: boolean | string
  readonly reset?: boolean | string
}

const SimpleFormButtons: React.FC<SimpleFormButtonsProps> = ({
  submit = 'Submit',
  reset = 'Reset',
}) => (
  <FormikConsumer>
    {({ dirty, isSubmitting, handleReset }) => (
      <Field groupModifier="grouped-centered">
        {submit !== false && (
          <Button type="submit" variant="info" disabled={isSubmitting}>
            {submit}
          </Button>
        )}
        {reset !== false && (
          <Button
            disabled={!dirty || isSubmitting}
            variant="danger"
            type="reset"
            onClick={handleReset}
          >
            {reset}
          </Button>
        )}
      </Field>
    )}
  </FormikConsumer>
)

export interface SimpleFormProps<Values> {
  readonly initialValues: Values
  readonly validationSchema?: ObjectSchema<Partial<Values>>
  onSubmit?(values: Values, actions: FormikActions<Values>): void
}

export interface TypedForm<Values extends object> {
  readonly Text: React.FC<GenericInputProps<Values, StringSchema>>
  readonly Number: React.FC<GenericInputProps<Values, NumberSchema>>
  readonly Password: React.FC<GenericInputProps<Values, StringSchema>>
  readonly Email: React.FC<GenericInputProps<Values, StringSchema>>
  readonly Checkbox: React.FC<SimpleCheckboxProps<Values>>
  readonly Telephone: React.FC<GenericInputProps<Values, NumberSchema>>
  readonly Url: React.FC<GenericInputProps<Values, StringSchema>>
  readonly RadioGroup: React.FC<SimpleRadioGroupProps<Values>>
  readonly TextArea: React.FC<SimpleTextAreaProps<Values>>
  readonly Select: React.FC<SimpleSelectProps<Values>>
  readonly Form: React.FC<SimpleFormProps<Values>>
}

export function typedForm<Values extends object>(): TypedForm<Values> {
  return {
    Text: props => <SimpleInput {...props} type="text" schema={string()} />,

    Number: props => <SimpleInput schema={number()} {...props} type="number" />,

    Password: props => (
      <SimpleInput schema={string()} {...props} type="password" />
    ),

    Email: props => <SimpleInput {...props} type="email" schema={string()} />,

    // @TODO: I think Telephone shouldn't be no?
    Telephone: props => <SimpleInput schema={number()} {...props} type="tel" />,

    Url: props => <SimpleInput schema={string()} {...props} type="url" />,

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
    Form: ({
      initialValues,
      validationSchema,
      onSubmit = consoleSubmit<Values>(0),
      children,
    }) => (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>{children}</Form>
      </Formik>
    ),
  }
}

// tslint:disable-next-line:typedef
export const Simple = {
  ...typedForm<{ readonly [s: string]: any }>(),
  FormButtons: SimpleFormButtons,
  Debug: DebugField,
}
