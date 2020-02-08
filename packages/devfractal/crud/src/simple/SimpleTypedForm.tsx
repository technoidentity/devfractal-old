import {
  CheckboxField,
  ErrorField,
  InputField,
  InputFieldProps,
  RadioGroupField,
  SelectField,
  TextAreaField,
} from '@stp/ui'
import { Field, Label } from '@stp/ui'
import { camelCaseToPhrase } from '@stp/utils'
import { Form, Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import {
  Simple,
  SimpleCheckboxProps,
  SimpleFormProps,
  SimpleRadioGroupProps,
  SimpleSelectProps,
  SimpleTextAreaProps,
} from './SimpleForm'
import { consoleSubmit } from './utils'

interface Named<Values extends {}, Value> {
  readonly name: keyof Values & string
  readonly value?: Value
}

// @TODO: value must by typed!
interface SimpleInputProps<
  Values extends {},
  Value extends string | number | readonly string[]
> extends Omit<InputFieldProps, 'name' | 'value'>, Named<Values, Value> {
  readonly schema: yup.Schema<Value>
  readonly label?: string
  readonly validations?: ReadonlyArray<
    (schema: yup.Schema<Value>) => yup.Schema<Value>
  >
}

interface GenericInputProps<
  Values extends {},
  Value extends string | number | readonly string[]
> extends Omit<SimpleInputProps<Values, Value>, 'type' | 'schema'> {}

function validator<S extends yup.Schema<any>>(
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
function SimpleInput<
  Values extends {},
  Value extends string | number | string[]
>(args: SimpleInputProps<Values, Value>): JSX.Element {
  const { schema, label, validations, ...props } = args
  const names: readonly string[] = props.name.split('../index')

  return (
    <Field>
      <Label>{label || camelCaseToPhrase(names[names.length - 1])}</Label>
      <InputField {...props} validate={validator(schema, validations)} />
      <ErrorField name={props.name} />
    </Field>
  )
}

export interface TypedFormChildren<Values extends {}> {
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
  readonly FormButtons: typeof Simple.FormButtons
  nested<Name extends keyof Values>(
    name: Name,
  ): React.FC<Omit<NestedProps<Values, Name>, 'name'>>
}

interface Children<Values extends {}> {
  children(Simple: TypedFormChildren<Values>): React.ReactNode
}

export interface TypedFormProps<Values extends {}>
  extends SimpleFormProps<Values>,
    Children<Values> {}

interface NestedContext {
  readonly names: readonly string[]
}

const NestedContext: React.Context<NestedContext> = React.createContext<
  NestedContext
>({ names: [] })

const childArgs: TypedFormChildren<any> = {
  Text: props => {
    return (
      <NestedContext.Consumer>
        {({ names }) => (
          <SimpleInput
            {...props}
            name={[...names, props.name].join('../index')}
            type="text"
            schema={yup.string()}
          />
        )}
      </NestedContext.Consumer>
    )
  },

  Number: props => (
    <NestedContext.Consumer>
      {({ names }) => (
        <SimpleInput
          schema={yup.number()}
          {...props}
          name={[...names, props.name].join('../index')}
          type="number"
        />
      )}
    </NestedContext.Consumer>
  ),

  Password: props => (
    <NestedContext.Consumer>
      {({ names }) => (
        <SimpleInput
          schema={yup.string()}
          {...props}
          name={[...names, props.name].join('../index')}
          type="password"
        />
      )}
    </NestedContext.Consumer>
  ),

  Email: props => (
    <NestedContext.Consumer>
      {({ names }) => (
        <SimpleInput
          {...props}
          name={[...names, props.name].join('../index')}
          type="email"
          schema={yup.string()}
        />
      )}
    </NestedContext.Consumer>
  ),

  // @TODO: I think Telephone shouldn't be no?
  Telephone: props => (
    <NestedContext.Consumer>
      {({ names }) => (
        <SimpleInput
          schema={yup.number()}
          {...props}
          name={[...names, props.name].join('../index')}
          type="tel"
        />
      )}
    </NestedContext.Consumer>
  ),

  Url: props => (
    <NestedContext.Consumer>
      {({ names }) => (
        <SimpleInput
          schema={yup.string()}
          {...props}
          name={[...names, props.name].join('../index')}
          type="url"
        />
      )}
    </NestedContext.Consumer>
  ),

  Checkbox: ({ children, noLabel, ...props }) => (
    <Field>
      <CheckboxField {...props}>
        {children || ` ${camelCaseToPhrase(props.name)}`}
      </CheckboxField>
      <ErrorField name={props.name} />
    </Field>
  ),

  RadioGroup: ({ children, ...props }) => (
    <NestedContext.Consumer>
      {({ names }) => (
        <Field>
          <RadioGroupField
            {...props}
            name={[...names, props.name].join('../index')}
          >
            {children}
          </RadioGroupField>
          <ErrorField name={props.name} />
        </Field>
      )}
    </NestedContext.Consumer>
  ),

  Select: ({ children, ...props }) => (
    <NestedContext.Consumer>
      {({ names }) => (
        <Field>
          <SelectField
            {...props}
            name={[...names, props.name].join('../index')}
          >
            {children}
          </SelectField>
          <ErrorField name={props.name} />
        </Field>
      )}
    </NestedContext.Consumer>
  ),

  TextArea: ({ label, ...props }) => (
    <NestedContext.Consumer>
      {({ names }) => (
        <Field>
          <Label>{label}</Label>
          <TextAreaField
            {...props}
            name={[...names, props.name].join('../index')}
          />
          <ErrorField name={props.name} />
        </Field>
      )}
    </NestedContext.Consumer>
  ),

  FormButtons: Simple.FormButtons,

  nested: (name: any) => props => <Nested<any, any> name={name} {...props} />,
}

export function TypedForm<Values extends {}>(
  props: TypedFormProps<Values>,
): JSX.Element {
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

interface NestedProps<Values, Name extends keyof Values>
  extends Children<Values[Name]> {
  readonly name: Name
}

export function Nested<Values, Name extends keyof Values>({
  name,
  children,
}: NestedProps<Values, Name>): JSX.Element {
  return (
    <NestedContext.Consumer>
      {({ names }) => (
        <NestedContext.Provider value={{ names: [...names, name as string] }}>
          {children(childArgs)}
        </NestedContext.Provider>
      )}
    </NestedContext.Consumer>
  )
}
