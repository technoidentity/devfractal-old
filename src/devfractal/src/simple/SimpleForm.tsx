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
  camelCaseToPhrase,
  CheckboxField,
  CheckboxFieldProps,
  consoleSubmit,
  Container,
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
} from '../lib'

// @TODO: value must by typed!
export interface SimpleInputProps<Values, S extends Schema<unknown>>
  extends Omit<InputFieldProps, 'name'> {
  readonly schema: S
  readonly label?: string
  readonly name: keyof Values & string
  readonly validations?: ReadonlyArray<(schema: S) => S>
}

type GenericInputProps<Values, S extends Schema<any> = StringSchema> = Omit<
  SimpleInputProps<Values, S>,
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

function SimpleInput<Values, S extends Schema<any> = StringSchema>(
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

function SimpleText<Values>(props: GenericInputProps<Values>): JSX.Element {
  return <SimpleInput<Values> {...props} type="text" schema={string()} />
}

function SimpleNumber<Values>(
  props: GenericInputProps<Values, NumberSchema>,
): JSX.Element {
  return <SimpleInput schema={number()} {...props} type="number" />
}

function SimplePassword<Values>(props: GenericInputProps<Values>): JSX.Element {
  return <SimpleInput schema={string()} {...props} type="password" />
}

function SimpleEmail<Values>(props: GenericInputProps<Values>): JSX.Element {
  return <SimpleInput {...props} type="email" schema={string()} />
}

// @TODO: I think Telephone shouldn't be no?
function SimpleTelephone<Values>(
  props: GenericInputProps<Values, NumberSchema>,
): JSX.Element {
  return <SimpleInput schema={number()} {...props} type="tel" />
}

function SimpleUrl<Values>(props: GenericInputProps<Values>): JSX.Element {
  return <SimpleInput schema={string()} {...props} type="url" />
}

export interface SimpleCheckboxProps<Values> extends CheckboxFieldProps {
  readonly name: keyof Values & string
  readonly noLabel?: boolean
}

function SimpleCheckbox<Values>({
  children,
  noLabel,
  ...props
}: SimpleCheckboxProps<Values>): JSX.Element {
  return (
    <Field>
      <CheckboxField {...props}>
        {children || (noLabel && ` camelCaseToPhrase(props.name)`)}
      </CheckboxField>
      <ErrorField name={props.name} />
    </Field>
  )
}
export interface SimpleRadioGroupProps<Values> extends RadioFieldProps {
  readonly name: keyof Values & string
}

function SimpleRadioGroup<Values>({
  children,
  ...props
}: SimpleRadioGroupProps<Values>): JSX.Element {
  return (
    <Field>
      <RadioGroupField {...props}>{children}</RadioGroupField>
      <ErrorField name={props.name} />
    </Field>
  )
}

export interface SimpleSelectProps<Values> extends SelectFieldProps {
  readonly name: keyof Values & string
}

function SimpleSelect<Values>({
  children,
  ...props
}: SimpleSelectProps<Values>): JSX.Element {
  return (
    <Field>
      <SelectField {...props}>{children}</SelectField>
      <ErrorField name={props.name} />
    </Field>
  )
}

export interface SimpleTextAreaProps<Values> extends TextAreaFieldProps {
  readonly name: keyof Values & string
  readonly label: string
}

function SimpleTextArea<Values>({
  label,
  ...props
}: SimpleTextAreaProps<Values>): JSX.Element {
  return (
    <Field>
      <Label>{label}</Label>
      <TextAreaField {...props} />
      <ErrorField name={props.name} />
    </Field>
  )
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

// tslint:disable-next-line:typedef
export function typedForm<Values>() {
  // Number(props: GenericInputProps<Values, NumberSchema>): JSX.Element
  // Password(props: GenericInputProps<Values>): JSX.Element
  // Email(props: GenericInputProps<Values>): JSX.Element
  // Telephone(props: GenericInputProps<Values>): JSX.Element
  // Checkbox(props: GenericInputProps<Values>): JSX.Element
  // Select(props: GenericInputProps<Values>): JSX.Element
  // TextArea(props: GenericInputProps<Values>): JSX.Element
  // RadioGroup(props: Props<Values>): JSX.Element
  // Url(props: UrlProps<Values>): JSX.Element
  // Debug(props: DebugProps<Values>): JSX.Element
  return {
    Text(props: GenericInputProps<Values>): JSX.Element {
      return <SimpleInput<Values> {...props} type="text" schema={string()} />
    },
  }
}
