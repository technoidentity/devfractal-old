import {
  CheckboxField,
  CheckboxFieldProps,
  consoleSubmit,
  DateField,
  DateFieldProps,
  DebugField,
  ErrorField,
  InputField,
  InputFieldProps,
  RadioFieldProps,
  RadioGroupField,
  SelectField,
  SelectFieldProps,
  TextAreaField,
  TextAreaFieldProps,
} from 'devfractal-forms'
import {
  Button,
  ButtonsGroup,
  ButtonsGroupProps,
  Field,
  FieldPropsBase,
  Label,
} from 'devfractal-ui-core'
import { Form, Formik, FormikActions, FormikConsumer } from 'formik'
import React from 'react'
import { camelCaseToPhrase } from 'technoidentity-utils'
import {
  date,
  DateSchema,
  number,
  NumberSchema,
  ObjectSchema,
  Schema,
  string,
  StringSchema,
} from 'yup'

interface Named<Values extends {}> {
  readonly name: keyof Values & string
}

// @TODO: value must by typed!
interface SimpleInputProps<Values extends {}, S extends Schema<any>>
  extends Omit<InputFieldProps, 'name' | 'size'>,
    Named<Values>,
    FieldPropsBase {
  readonly schema: S
  readonly label?: string
  readonly validations?: ReadonlyArray<(schema: S) => S>
}

interface GenericInputProps<Values extends {}, S extends Schema<any>>
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

function splitFieldProps<T extends FieldPropsBase>({
  grouped,
  addons,
  horizontal,
  groupedMultiline,
  groupModifier,
  addonsModifier,
  size,
  ...rest
}: // tslint:disable-next-line: readonly-array
T): [FieldPropsBase, Omit<T, keyof FieldPropsBase>] {
  return [
    {
      grouped,
      addons,
      horizontal,
      groupedMultiline,
      groupModifier,
      addonsModifier,
      size,
    },
    rest,
  ]
}
function SimpleInput<Values extends {}, S extends Schema<any>>(
  args: SimpleInputProps<Values, S>,
): JSX.Element {
  const [fieldProps, rest] = splitFieldProps(args)
  const { schema, label, validations, ...props } = rest
  return (
    <Field {...fieldProps}>
      <Label>{label || camelCaseToPhrase(props.name)}</Label>
      <InputField {...props} validate={validator(schema, validations)} />
      <ErrorField name={props.name} />
    </Field>
  )
}

interface SimpleDateProps<Values extends {}>
  extends Omit<DateFieldProps, 'name' | 'size'>,
    Named<Values>,
    FieldPropsBase {
  readonly validations?: ReadonlyArray<(schema: DateSchema) => DateSchema>
  readonly label?: string

  // readonly validations?: ReadonlyArray<(schema: S) => S>
}

function SimpleDate<Values extends {}>(
  args: SimpleDateProps<Values>,
): JSX.Element {
  const [fieldProps, rest] = splitFieldProps(args)
  const { label, validations, ...props } = rest
  return (
    <Field {...fieldProps}>
      <Label>{label || camelCaseToPhrase(props.name)}</Label>
      <DateField {...props} validate={validator(date(), validations)} />
      <ErrorField name={props.name} />
    </Field>
  )
}

export interface SimpleCheckboxProps<Values extends {}>
  extends Omit<CheckboxFieldProps, 'name' | 'size'>,
    Named<Values>,
    FieldPropsBase {
  readonly noLabel?: boolean
}

export interface SimpleRadioGroupProps<Values extends {}>
  extends Omit<RadioFieldProps, 'name' | 'size'>,
    Named<Values>,
    FieldPropsBase {
  readonly label?: string
}

export interface SimpleSelectProps<Values extends {}>
  extends Omit<SelectFieldProps, 'name' | 'size'>,
    Named<Values>,
    FieldPropsBase {
  readonly label?: string
}

export interface SimpleTextAreaProps<Values extends {}>
  extends Omit<TextAreaFieldProps, 'name' | 'size'>,
    Named<Values>,
    FieldPropsBase {
  readonly name: keyof Values & string
  readonly label?: string
}

export interface SimpleFormButtonsProps
  extends Omit<ButtonsGroupProps, 'size'>,
    FieldPropsBase {
  readonly submit?: boolean | string
  readonly reset?: boolean | string
}

const SimpleFormButtons: React.FC<SimpleFormButtonsProps> = ({
  submit = 'Submit',
  reset = 'Reset',
  ...args
}) => {
  const [fieldProps, props] = splitFieldProps(args)

  return (
    <FormikConsumer>
      {({ dirty, isSubmitting, handleReset }) => (
        <ButtonsGroup {...props}>
          <Field groupModifier="grouped-centered" {...fieldProps}>
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
        </ButtonsGroup>
      )}
    </FormikConsumer>
  )
}

export interface SimpleFormProps<Values> {
  readonly initialValues: Values
  readonly validationSchema?: ObjectSchema<Partial<Values>>
  onSubmit?(values: Values, actions: FormikActions<Values>): void
}

export interface TypedForm<Values extends {}> {
  readonly Text: React.FC<GenericInputProps<Values, StringSchema>>
  readonly Date: React.FC<SimpleDateProps<Values>>
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

export function typedForm<Values extends {}>(): TypedForm<Values> {
  return {
    Text: props => <SimpleInput {...props} type="text" schema={string()} />,
    Date: props => <SimpleDate {...props} />,
    Number: props => <SimpleInput schema={number()} {...props} type="number" />,

    Password: props => (
      <SimpleInput schema={string()} {...props} type="password" />
    ),

    Email: props => <SimpleInput {...props} type="email" schema={string()} />,

    // @TODO: I think Telephone shouldn't be no?
    Telephone: props => <SimpleInput schema={number()} {...props} type="tel" />,

    Url: props => <SimpleInput schema={string()} {...props} type="url" />,

    Checkbox: ({ children, noLabel, ...args }) => {
      const [fieldProps, props] = splitFieldProps(args)
      return (
        <Field {...fieldProps}>
          <Label>
            {children || (!noLabel && ` ${camelCaseToPhrase(props.name)}`)}
          </Label>
          <CheckboxField {...props} />
          <ErrorField name={props.name} />
        </Field>
      )
    },

    RadioGroup: ({ children, label, ...args }) => {
      const [fieldProps, props] = splitFieldProps(args)
      return (
        <Field {...fieldProps}>
          <Label>{label || camelCaseToPhrase(props.name)}</Label>
          <RadioGroupField {...props}>{children}</RadioGroupField>
          <ErrorField name={props.name} />
        </Field>
      )
    },

    Select: ({ children, label, ...args }) => {
      const [fieldProps, props] = splitFieldProps(args)
      return (
        <Field {...fieldProps}>
          <Label>{label || camelCaseToPhrase(props.name)}</Label>
          <SelectField {...props}>{children}</SelectField>
          <ErrorField name={props.name} />
        </Field>
      )
    },

    TextArea: ({ label, ...args }) => {
      const [fieldProps, props] = splitFieldProps(args)
      return (
        <Field {...fieldProps}>
          <Label>{label || camelCaseToPhrase(props.name)}</Label>
          <TextAreaField {...props} />
          <ErrorField name={props.name} />
        </Field>
      )
    },
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
