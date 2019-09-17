import { Button } from '@material-ui/core'
import { Formik, FormikProps } from 'formik'
import React from 'react'
import { CheckboxMuiField } from '../fields/CheckBoxMuiField'
import { DateMuiField } from '../fields/DateMuiField'
import { RadioMuiField } from '../fields/RadioMuiField'
import { SelectField } from '../fields/SelectMuiField'
import { SwitchMuiField } from '../fields/SwitchMuiField'
import { TextMuiField } from '../fields/TextMuiField'

const MuiForm: (props: FormikProps<FormikWithMuiFormProps>) => JSX.Element = ({
  values,
  handleChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <CheckboxMuiField checked={values.checkbox} name="checkbox" />
      <br />
      <SelectField name="select" value={values.select} />
      <br />
      <TextMuiField name="name" value={values.name} />
      <br />
      <SwitchMuiField placeholder="switch" name="switch" value={values.switch} />
      <br />
      <RadioMuiField name="gender" value={values.gender} />
      <br />
      <DateMuiField onChange={handleChange}  name="date" value={values.date} />
      <br />
      <Button type="submit">submit</Button>
    </form>
  )
}

export const FormikWithMuiForm: React.FC = () => (
  <Formik
    initialValues={{
      checkbox: true,
      select: '',
      name: '',
      switch: false,
      gender: '',
      date: new Date(),
    }}
    onSubmit={values => {
      console.log(values)
    }}
    render={MuiForm}
  />
)

interface FormikWithMuiFormProps {
  readonly checkbox: boolean
  readonly select: string
  readonly name: string
  readonly switch: boolean
  readonly gender: string
  readonly date: Date
}
