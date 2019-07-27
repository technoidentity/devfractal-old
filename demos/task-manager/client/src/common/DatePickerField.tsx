import { Field, FieldProps } from 'formik'
import React from 'react'
import DatePicker from 'react-datepicker'
import { ErrorField } from 'technoidentity-devfractal-forms'

const FormikDatePicker: React.FC<FieldProps> = ({ field, form }) => (
  <div className="control">
    <DatePicker
      {...field}
      selected={field.value}
      onChange={date => form.setFieldValue(field.name, date)}
      className="input"
    />
  </div>
)

export interface DatePickerFieldProps {
  readonly name: string
  readonly label: string
}

export const DatePickerField: React.FC<DatePickerFieldProps> = ({
  name,
  label,
}) => (
  <div className="field">
    <label className="label">{label}</label>
    <div className="control">
      <Field
        type="text"
        name={name}
        className="input"
        component={FormikDatePicker}
      />
    </div>
    <div className="help is-danger">
      <ErrorField name={name} />
    </div>
  </div>
)
