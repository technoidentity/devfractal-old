import {
  ErrorMessage,
  Form,
  Formik,
  FormikActions,
  FormikConsumer,
} from 'formik'
import { Persist } from 'formik-persist'
import React from 'react'
import { ObjectSchema } from 'yup'
import { Button, Field, Label } from '../form'
import {
  CheckboxField,
  CheckboxFieldProps,
  InputField,
  InputFieldProps,
  SelectField,
  SelectFieldProps,
  TextAreaField,
  TextAreaFieldProps,
} from './fields'

export interface SimpleInputProps extends InputFieldProps {
  readonly label: string
  readonly name: string
}

type SpecificInputProps = Exclude<SimpleInputProps, 'type'>

export const SimpleInput: React.SFC<SpecificInputProps> = ({
  label,
  ...props
}) => (
  <>
    <Label>{label}</Label>
    <InputField {...props} />
    <ErrorMessage name={props.name} className="field-error" />
  </>
)

export const SimpleText: React.SFC<SpecificInputProps> = props => (
  <SimpleInput {...props} type="text" />
)
export const SimplePassword: React.SFC<SimpleInputProps> = props => (
  <SimpleInput {...props} type="password" />
)
export const SimpleEmail: React.SFC<SimpleInputProps> = props => (
  <SimpleInput {...props} type="email" />
)
export const SimpleTelephone: React.SFC<SimpleInputProps> = props => (
  <SimpleInput {...props} type="tel" />
)
export const SimpleUrl: React.SFC<SimpleInputProps> = props => (
  <SimpleInput {...props} type="url" />
)

export interface SimpleCheckboxProps extends CheckboxFieldProps {
  readonly name: string
}

export const SimpleCheckbox: React.SFC<SimpleCheckboxProps> = ({
  children,
  ...props
}) => (
  <>
    <CheckboxField {...props}>{children}</CheckboxField>
    <ErrorMessage name={props.name} className="field-error" />
  </>
)

export interface SimpleSelectProps extends SelectFieldProps {
  readonly name: string
}

export const SimpleSelect: React.SFC<SimpleSelectProps> = ({
  children,
  ...props
}) => (
  <>
    <SelectField {...props}>{children}</SelectField>
    <ErrorMessage name={props.name} className="field-error" />
  </>
)

export interface SimpleTextAreaProps extends TextAreaFieldProps {
  readonly name: string
  readonly label: string
}

export const SimpleTextArea: React.SFC<SimpleTextAreaProps> = ({
  label,
  ...props
}) => (
  <>
    <Label>{label}</Label>
    <TextAreaField {...props} />
    <ErrorMessage name={props.name} className="field-error" />
  </>
)
// export const SimpleColor: React.SFC<SimpleInputProps> = props => (
//   <SimpleInput {...props} type="color" />
// )
// export const SimpleDate: React.SFC<SimpleInputProps> = props => (
//   <SimpleInput {...props} type="date" />
// )
// export const SimpleDateTimeLocal: React.SFC<SimpleInputProps> = props => (
//   <SimpleInput {...props} type="datetime-local" />
// )
// export const SimpleMonth: React.SFC<SimpleInputProps> = props => (
//   <SimpleInput {...props} type="month" />
// )
// export const SimpleNumber: React.SFC<SimpleInputProps> = props => (
//   <SimpleInput {...props} type="number" />
// )
// export const SimpleRange: React.SFC<SimpleInputProps> = props => (
//   <SimpleInput {...props} type="range" />
// )
// export const SimpleSearch: React.SFC<SimpleInputProps> = props => (
//   <SimpleInput {...props} type="search" />
// )
// export const SimpleTime: React.SFC<SimpleInputProps> = props => (
//   <SimpleInput {...props} type="time" />
// )

// export const SimpleWeek: React.SFC<SimpleInputProps> = props => (
//   <SimpleInput {...props} type="week" />
// )
export interface SimpleFormButtonsProps {
  readonly submit?: boolean | string
  readonly reset?: boolean | string
}

export const SimpleFormButtons: React.SFC<SimpleFormButtonsProps> = ({
  submit = 'Submit',
  reset = 'Reset',
}) => (
  <FormikConsumer>
    {({ dirty, isSubmitting, handleReset }) => (
      <Field groupModifier="grouped-right">
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
  readonly validationSchema: ObjectSchema<Values>
  readonly persist?: string
  onSubmit(values: Values, actions: FormikActions<Values>): void
}

export const SimpleForm: <Values>(
  props: SimpleFormProps<Values> & { readonly children: React.ReactNode },
) => JSX.Element = ({
  initialValues,
  validationSchema,
  onSubmit,
  persist,
  children,
}) => {
  return (
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
  )
}

export const SimpleValues: React.SFC = () => (
  <FormikConsumer>
    {({ values }) => (
      <code style={{ background: '#f6f8fa' }}>
        {JSON.stringify(values, null, 2)}
      </code>
    )}
  </FormikConsumer>
)

// tslint:disable-next-line:typedef
export const Simple = {
  Form: SimpleForm,
  FormButtons: SimpleFormButtons,
  Input: SimpleInput,
  Text: SimpleText,
  Password: SimplePassword,
  Email: SimpleEmail,
  Telephone: SimpleTelephone,
  Checkbox: SimpleCheckbox,
  Select: SimpleSelect,
  TextArea: SimpleTextArea,
  // Color: SimpleColor,
  // Date: SimpleDate,
  // DateTimeLocal: SimpleDateTimeLocal,
  // Month: SimpleMonth,
  // Number: SimpleNumber,
  // Range: SimpleRange,
  // Search: SimpleSearch,
  // Time: SimpleTime,
  Url: SimpleUrl,
  // Week: SimpleWeek,
  Values: SimpleValues,
}
