import { Form, Formik, FormikActions, FormikConsumer } from 'formik'
import { Persist } from 'formik-persist'
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
  CheckboxField,
  CheckboxFieldProps,
  consoleSubmit,
  DebugField,
  ErrorField,
  Field,
  InputField,
  InputFieldProps,
  Label,
  RadioFieldProps,
  RadioGroupField,
  SelectField,
  SelectFieldProps,
  TextAreaField,
  TextAreaFieldProps,
} from '../form'
import { Container } from '../layout'
import { Omit } from '../types'
import { camelCaseToPhrase } from '../utils'

export interface SimpleInputProps<S extends Schema<any>>
  extends InputFieldProps {
  readonly schema: S
  readonly label?: string
  readonly name: string
  readonly validations?: ReadonlyArray<(schema: S) => S>
}

type GenericInputProps<S extends Schema<any> = StringSchema> = Omit<
  SimpleInputProps<S>,
  'type' | 'schema'
>
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

function SimpleInput<S extends Schema<any> = StringSchema>(
  args: SimpleInputProps<S>,
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

const SimpleText: React.SFC<GenericInputProps> = props => (
  <SimpleInput {...props} type="text" schema={string()} />
)
const SimpleNumber: React.SFC<GenericInputProps<NumberSchema>> = props => (
  <SimpleInput schema={number()} {...props} type="number" />
)
const SimplePassword: React.SFC<GenericInputProps> = props => (
  <SimpleInput schema={string()} {...props} type="password" />
)
const SimpleEmail: React.SFC<GenericInputProps> = props => (
  <SimpleInput {...props} type="email" schema={string()} />
)
const SimpleTelephone: React.SFC<GenericInputProps<NumberSchema>> = props => (
  <SimpleInput schema={number()} {...props} type="tel" />
)
const SimpleUrl: React.SFC<GenericInputProps> = props => (
  <SimpleInput schema={string()} {...props} type="url" />
)

export interface SimpleCheckboxProps extends CheckboxFieldProps {
  readonly name: string
}

const SimpleCheckbox: React.SFC<SimpleCheckboxProps> = ({
  children,
  ...props
}) => (
  <Field>
    <CheckboxField {...props}>{children}</CheckboxField>
    <ErrorField name={props.name} />
  </Field>
)

export interface SimpleRadioGroupProps extends RadioFieldProps {
  readonly name: string
}

const SimpleRadioGroup: React.SFC<SimpleRadioGroupProps> = ({
  children,
  ...props
}) => (
  <Field>
    <RadioGroupField {...props}>{children}</RadioGroupField>
    <ErrorField name={props.name} />
  </Field>
)

export interface SimpleSelectProps extends SelectFieldProps {
  readonly name: string
}

const SimpleSelect: React.SFC<SimpleSelectProps> = ({ children, ...props }) => (
  <Field>
    <SelectField {...props}>{children}</SelectField>
    <ErrorField name={props.name} />
  </Field>
)

export interface SimpleTextAreaProps extends TextAreaFieldProps {
  readonly name: string
  readonly label: string
}

const SimpleTextArea: React.SFC<SimpleTextAreaProps> = ({
  label,
  ...props
}) => (
  <Field>
    <Label>{label}</Label>
    <TextAreaField {...props} />
    <ErrorField name={props.name} />
  </Field>
)

export interface SimpleFormButtonsProps {
  readonly submit?: boolean | string
  readonly reset?: boolean | string
}

const SimpleFormButtons: React.SFC<SimpleFormButtonsProps> = ({
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
  readonly persist?: string
  onSubmit?(values: Values, actions: FormikActions<Values>): void
}

function SimpleForm<Values extends object>({
  initialValues,
  validationSchema,
  onSubmit = consoleSubmit<Values>(0),
  persist,
  children,
}: SimpleFormProps<Values> & {
  readonly children: React.ReactNode
}): JSX.Element {
  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {
          <Form>
            {children}
            {persist && <Persist name={persist} />}
          </Form>
        }
      </Formik>
    </Container>
  )
}

// tslint:disable-next-line:typedef
export const Simple = {
  Form: SimpleForm,
  FormButtons: SimpleFormButtons,
  Input: SimpleInput,
  Number: SimpleNumber,
  Text: SimpleText,
  Password: SimplePassword,
  Email: SimpleEmail,
  Telephone: SimpleTelephone,
  Checkbox: SimpleCheckbox,
  Select: SimpleSelect,
  TextArea: SimpleTextArea,
  RadioGroup: SimpleRadioGroup,
  Url: SimpleUrl,
  Debug: DebugField,
}
