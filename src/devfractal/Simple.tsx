import {
  Form,
  Formik,
  FormikActions,
  FormikConfig,
  FormikConsumer,
} from 'formik'
import { Persist } from 'formik-persist'
import React from 'react'
import { Boolean, Function, Number } from 'tcomb'
import { number, NumberSchema, Schema, string, StringSchema } from 'yup'
import { Async, camelCaseToPhrase, State } from '../utils'
import { Column, Columns } from './columns'
import {
  RoutedTabs,
  RoutedTabsItem,
  RoutedTabsProps,
  Tabs,
  TabsItem,
  TabsProps,
} from './components'
import {
  Box,
  Table,
  TableBody,
  TableHead,
  TableProps,
  Td,
  Th,
  Title,
  Tr,
} from './elements'
import {
  Button,
  CheckBox,
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
} from './form'
import { Container, Section } from './layout'
import { Omit } from './types'

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
  <SimpleInput {...props} type="password" schema={string()} />
)
const SimpleEmail: React.SFC<GenericInputProps> = props => (
  <SimpleInput {...props} type="email" schema={string()} />
)
const SimpleTelephone: React.SFC<GenericInputProps<NumberSchema>> = props => (
  <SimpleInput schema={number()} {...props} type="tel" />
)
const SimpleUrl: React.SFC<GenericInputProps> = props => (
  <SimpleInput {...props} type="url" schema={string()} />
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

export type SimpleFormProps<Values> = Omit<FormikConfig<Values>, 'onSubmit'> & {
  readonly persist?: string
  onSubmit?(values: Values, formikActions: FormikActions<Values>): void
}

function SimpleForm<Values>(
  args: SimpleFormProps<Values> & { readonly children: React.ReactNode },
): JSX.Element {
  const { onSubmit = consoleSubmit(0), persist, children, ...props } = args

  return (
    <Container>
      <Formik<Values> {...props} onSubmit={onSubmit}>
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
  Text: SimpleText,
  Number: SimpleNumber,
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

export interface RowClickEvent<T> {
  readonly value: T
}

export interface SimpleTableProps<T> extends TableProps {
  readonly headers?: ReadonlyArray<string>
  readonly values: ReadonlyArray<T> | (() => Promise<ReadonlyArray<T>>)
  onRowClicked?(value: RowClickEvent<T>): void
}

export interface RowsProps<T> {
  readonly headers: ReadonlyArray<string>
  readonly values: ReadonlyArray<T>
  onRowClicked?(value: RowClickEvent<T>): void
}

function Rows<T>(props: RowsProps<T>): JSX.Element {
  const { values, headers, onRowClicked } = props
  return (
    <>
      {values.map((value, i) => (
        <Tr
          key={i}
          onClick={() => onRowClicked && onRowClicked({ value: values[i] })}
        >
          {headers.map(key => (
            <Td key={key}>
              {Boolean.is(value[key]) ? (
                <CheckBox readOnly checked={value[key]} />
              ) : (
                value[key]
              )}
            </Td>
          ))}
        </Tr>
      ))}
    </>
  )
}

export interface TableViewProps<T> extends TableProps {
  readonly headers?: ReadonlyArray<string>
  readonly values: ReadonlyArray<T>
  onRowClicked?(value: RowClickEvent<T>): void
}

function TableView<T>(args: TableViewProps<T>): JSX.Element {
  const { headers, values, onRowClicked, ...props } = args
  const allHeaders: ReadonlyArray<string> =
    headers || Object.keys(values[0] || {})
  return (
    <Table {...props} fullWidth>
      <TableHead>
        <Tr>
          {allHeaders.map(h => (
            <Th key={h}>{camelCaseToPhrase(h)}</Th>
          ))}
        </Tr>
      </TableHead>

      <TableBody>
        <Rows
          values={values}
          headers={allHeaders}
          onRowClicked={onRowClicked}
        />
      </TableBody>
    </Table>
  )
}

export function SimpleTable<T>(args: SimpleTableProps<T>): JSX.Element {
  const { values, ...props } = args
  if (Function.is(values)) {
    return (
      <Async asyncFn={values}>
        {({ error, data }) => {
          if (error) {
            return <div>Error</div>
          } else if (data) {
            return <TableView {...props} values={data} />
          } else {
            return <div>Loading...</div>
          }
        }}
      </Async>
    )
  } else {
    return <TableView values={values} {...props} />
  }
}

export interface SimpleTabsProps extends Omit<TabsProps, 'selectedTab'> {
  readonly name?: string
  readonly values?: ReadonlyArray<string>
}

export const SimpleTabs: React.SFC<SimpleTabsProps> = ({
  name,
  values = [],
  ...props
}) => (
  <State
    initial={values[0]}
    render={({ value, set }) => (
      <Tabs
        {...props}
        selectedTab={value}
        onTabChange={evt => {
          if (evt.value) {
            set(evt.value)
          }
          if (props.onTabChange) {
            props.onTabChange(evt)
          }
        }}
        name={name}
      >
        {values.map(value => (
          <TabsItem key={value} value={value}>
            {camelCaseToPhrase(value)}
          </TabsItem>
        ))}
      </Tabs>
    )}
  />
)

export interface SimpleRoutedTabsProps
  extends Omit<RoutedTabsProps, 'selectedTab'> {
  readonly name?: string
  readonly values?: ReadonlyArray<string>
}

export const SimpleRoutedTabs: React.SFC<SimpleRoutedTabsProps> = ({
  values = [],
  ...props
}) => (
  <RoutedTabs {...props}>
    {values.map(value => (
      <RoutedTabsItem key={value} value={value}>
        {camelCaseToPhrase(value)}
      </RoutedTabsItem>
    ))}
  </RoutedTabs>
)

const SimpleHeader: React.SFC<{ readonly objectKey: string }> = ({
  objectKey,
}) => <Title size="4">{camelCaseToPhrase(objectKey)}</Title>

const SimpleValue: React.SFC<{ readonly objectValue: string }> = ({
  objectValue,
}) =>
  Boolean.is(objectValue) ? (
    <CheckBox checked={objectValue} readOnly />
  ) : (
    <>{objectValue}</>
  )

export interface SimpleViewerProps extends React.HTMLAttributes<HTMLElement> {
  readonly object: { readonly [index: string]: any }
}

export const SimpleViewer: React.SFC<SimpleViewerProps> = ({ object }) => {
  return (
    <Section>
      <Box>
        {Object.keys(object).map(key => (
          <Columns key={key}>
            <Column>
              <SimpleHeader objectKey={key} />
            </Column>
            <Column>
              <SimpleValue objectValue={object[key]} />
            </Column>
          </Columns>
        ))}
      </Box>
    </Section>
  )
}

export interface SimpleEditorProps extends React.HTMLAttributes<HTMLElement> {
  readonly object: { readonly [index: string]: any }
}

export const SimpleEditor: React.SFC<SimpleEditorProps> = ({ object }) => {
  return (
    <Section>
      <Box>
        <Simple.Form initialValues={object}>
          {Object.keys(object).map(key => (
            <React.Fragment key={key}>
              {Boolean.is(object[key]) ? (
                <>
                  <Label>{camelCaseToPhrase(key)}</Label>
                  <Simple.Checkbox name={key} checked={object[key]} readOnly />
                </>
              ) : Number.is(object[key]) ? (
                <Simple.Number label={camelCaseToPhrase(key)} name={key} />
              ) : (
                <Simple.Text label={camelCaseToPhrase(key)} name={key} />
              )}
            </React.Fragment>
          ))}
          <Simple.FormButtons />
        </Simple.Form>
      </Box>
    </Section>
  )
}
