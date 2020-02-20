import { Form, Formik, FormikConsumer, FormikHelpers } from 'formik'
import React from 'react'
import { consoleSubmit, DebugField } from 'technoidentity-core'
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
import {
  Button,
  ButtonsGroup,
  ButtonsGroupProps,
  ElProps,
  Field,
  FieldPropsBase,
  Label,
} from '../core'
import {
  CheckboxField,
  CheckboxFieldProps,
  DateField,
  DateFieldProps,
  ErrorField,
  InputField,
  InputFieldProps,
  RadioFieldProps,
  RadioGroupField,
  SelectField,
  SelectFieldProps,
  TextAreaField,
  TextAreaFieldProps,
} from '../forms'

type Replace<T, K extends string & keyof T, R extends string> = Omit<T, K> &
  { readonly [P in R]?: T[K] }

type FieldProps = Replace<FieldPropsBase, 'size', 'fieldSize'>

interface Named<Values extends {}> {
  readonly name: Extract<keyof Values, string>
}

// @TODO: value must by typed!
interface SimpleInputProps<Values extends {}, S extends Schema<any>>
  extends Omit<InputFieldProps, 'name' | 'size'>,
    Named<Values>,
    FieldProps {
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

function splitFieldProps<T extends FieldProps>({
  grouped,
  addons,
  horizontal,
  groupedMultiline,
  groupModifier,
  addonsModifier,
  fieldSize,
  ...rest
}: // tslint:disable-next-line: readonly-array
T): [FieldPropsBase, Omit<T, keyof FieldProps>] {
  return [
    {
      grouped,
      addons,
      horizontal,
      groupedMultiline,
      groupModifier,
      addonsModifier,
      size: fieldSize,
    },
    rest,
  ]
}

function SimpleInput<Values extends {}, S extends Schema<any>>(
  args: SimpleInputProps<Values, S>,
): JSX.Element {
  const [fieldProps, rest] = splitFieldProps(args)
  const { schema, label, validations, ...props } = rest

  const id: string = props.id || props.name

  return (
    <Field {...fieldProps}>
      <Label htmlFor={id}>{label || camelCaseToPhrase(props.name)}</Label>
      <InputField
        id={id}
        {...props}
        validate={validator(schema, validations)}
      />
      <ErrorField name={props.name} />
    </Field>
  )
}

interface SimpleDateProps<Values extends {}>
  extends Omit<DateFieldProps, 'name' | 'size'>,
    Named<Values>,
    FieldProps {
  readonly validations?: ReadonlyArray<(schema: DateSchema) => DateSchema>
  readonly label?: string
}

function SimpleDate<Values extends {}>(
  args: SimpleDateProps<Values>,
): JSX.Element {
  const [fieldProps, rest] = splitFieldProps(args)
  const { label, validations, ...props } = rest
  const id: string = props.id || props.name

  return (
    <Field {...fieldProps}>
      <Label htmlFor={id}>{label || camelCaseToPhrase(props.name)}</Label>
      <DateField id={id} {...props} validate={validator(date(), validations)} />
      <ErrorField name={props.name} />
    </Field>
  )
}

export interface SimpleCheckboxProps<Values extends {}>
  extends Omit<CheckboxFieldProps, 'name' | 'size'>,
    Named<Values>,
    FieldProps {
  readonly noLabel?: boolean
}

export interface SimpleRadioGroupProps<Values extends {}>
  extends Omit<RadioFieldProps, 'name' | 'size'>,
    Named<Values>,
    FieldProps {
  readonly label?: string
}

export interface SimpleMultiCheckboxProps<Values extends {}>
  extends Omit<ElProps, 'name'>,
    Named<Values>,
    FieldProps {
  readonly label?: string
}

export interface CheckboxItemProps
  extends Omit<CheckboxFieldProps, 'name' | 'size'> {}

export interface SimpleSelectProps<Values extends {}>
  extends Omit<SelectFieldProps, 'name' | 'size' | 'multiple'>,
    Named<Values>,
    FieldProps {
  readonly label?: string
}

// @TODO: validations must be array validations?
export interface SimpleMultiSelectProps<Values extends {}>
  extends Omit<SelectFieldProps, 'name' | 'size' | 'value' | 'multiple'>,
    Named<Values>,
    FieldProps {
  // tslint:disable-next-line: readonly-array
  readonly value?: string[]
  readonly label?: string
}

export interface SimpleTextAreaProps<Values extends {}>
  extends Omit<TextAreaFieldProps, 'name' | 'size'>,
    Named<Values>,
    FieldProps {
  readonly label?: string
  readonly validations?: ReadonlyArray<(schema: StringSchema) => StringSchema>
}

export interface SimpleFormButtonsProps extends ButtonsGroupProps {
  readonly submit?: boolean | string
  readonly reset?: boolean | string
}

const SimpleFormButtons: React.FC<SimpleFormButtonsProps> = ({
  submit = 'Submit',
  reset = 'Reset',
  ...props
}) => (
  <FormikConsumer>
    {({ dirty, isSubmitting, handleReset }) => (
      <ButtonsGroup {...props}>
        {submit !== false && (
          <Button
            type="submit"
            variant="info"
            disabled={isSubmitting}
            noControl
          >
            {submit}
          </Button>
        )}
        {reset !== false && (
          <Button
            disabled={!dirty || isSubmitting}
            variant="danger"
            type="reset"
            onClick={handleReset}
            noControl
          >
            {reset}
          </Button>
        )}
      </ButtonsGroup>
    )}
  </FormikConsumer>
)

export interface SimpleFormProps<Values> {
  readonly initialValues: Values
  readonly validationSchema?: ObjectSchema<Partial<Values>>
  onSubmit?(values: Values, actions: FormikHelpers<Values>): void
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
  readonly MultiSelect: React.FC<SimpleMultiSelectProps<Values>>
  readonly MultiCheckbox: React.FC<SimpleMultiCheckboxProps<Values>>
  readonly CheckboxItem: React.FC<CheckboxItemProps>
  readonly Form: React.FC<SimpleFormProps<Values>>
  readonly FormButtons: React.FC<SimpleFormButtonsProps>
  readonly Debug: typeof DebugField
}

interface MultiCheckContext {
  readonly name: string
}

const MultiCheckContext: React.Context<MultiCheckContext> = React.createContext(
  undefined as any,
)

function typedFormInternal<Values extends {}>(): TypedForm<Values> {
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
      const id: string = props.id || props.name

      return (
        <Field {...fieldProps}>
          <Label htmlFor={id}>
            {children || (!noLabel && ` ${camelCaseToPhrase(props.name)}`)}
          </Label>
          <CheckboxField id={id} {...props} />
          <ErrorField name={props.name} />
        </Field>
      )
    },

    RadioGroup: ({ children, label, ...args }) => {
      const [fieldProps, props] = splitFieldProps(args)
      const id: string = props.id || props.name

      return (
        <Field {...fieldProps}>
          <Label htmlFor={id}>{label || camelCaseToPhrase(props.name)}</Label>
          <RadioGroupField {...props}>{children}</RadioGroupField>
          <ErrorField name={props.name} />
        </Field>
      )
    },

    Select: ({ children, label, ...args }) => {
      const [fieldProps, props] = splitFieldProps(args)
      const id: string = props.id || props.name

      return (
        <Field {...fieldProps}>
          <Label htmlFor={id}>{label || camelCaseToPhrase(props.name)}</Label>
          <SelectField id={id} {...props}>
            {children}
          </SelectField>
          <ErrorField name={props.name} />
        </Field>
      )
    },

    MultiSelect: ({ label, ...args }) => {
      const [fieldProps, props] = splitFieldProps(args)
      const id: string = props.id || props.name

      return (
        <Field {...fieldProps}>
          <Label htmlFor={id}>{label || camelCaseToPhrase(props.name)}</Label>
          <SelectField id={id} {...props} multiple={true} />
          <ErrorField name={props.name} />
        </Field>
      )
    },

    MultiCheckbox: ({ label, children, ...rest }) => {
      const [fieldProps, props] = splitFieldProps(rest)
      const id: string = props.id || props.name
      return (
        <Field {...fieldProps}>
          <Label htmlFor={id}>{label || camelCaseToPhrase(props.name)}</Label>
          <MultiCheckContext.Provider value={{ name: props.name }}>
            {children}
          </MultiCheckContext.Provider>
          <ErrorField name={props.name} />
        </Field>
      )
    },

    CheckboxItem: props => {
      const id: string = props.id || `${props.value}`
      const { name } = React.useContext(MultiCheckContext)
      return <CheckboxField name={name} id={id} {...props} />
    },

    TextArea: ({ label, validations, ...args }) => {
      const [fieldProps, props] = splitFieldProps(args)
      const id: string = props.id || props.name

      return (
        <Field {...fieldProps}>
          <Label htmlFor={id}>{label || camelCaseToPhrase(props.name)}</Label>
          <TextAreaField
            id={id}
            {...props}
            validate={validator(string(), validations)}
          />
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
    FormButtons: SimpleFormButtons,
    Debug: DebugField,
  }
}

// tslint:disable-next-line: no-let
let form: TypedForm<any> | undefined

export function typedForm<Values extends {}>(): TypedForm<Values> {
  if (form) {
    return form
  }
  form = typedFormInternal()
  return form
}

// tslint:disable-next-line:typedef
export const Simple = typedForm<any>()
