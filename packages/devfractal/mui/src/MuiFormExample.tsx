import { Button, FormControlLabel } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Radio from '@material-ui/core/Radio'
import { makeStyles } from '@material-ui/core/styles'
import { jsonStringify } from '@stp/utils'
import { Formik, FormikConsumer, FormikProps } from 'formik'
import React from 'react'
import {
  CheckboxField,
  DateField,
  RadioGroupField,
  SelectField,
  SwitchField,
  TextField,
} from '.'

// tslint:disable typedef

export const DebugField: React.FC = () => (
  <FormikConsumer>
    {({ values }) => <pre>{jsonStringify(values)}</pre>}
  </FormikConsumer>
)

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
}))

const RadioButtonsGroup: React.FC = () => {
  const classes = useStyles()

  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroupField aria-label="gender" name="gender">
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroupField>
    </FormControl>
  )
}

const MuiForm: (props: FormikProps<FormikWithMuiFormProps>) => JSX.Element = ({
  values,
  handleChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <CheckboxField checked={values.checkbox} name="checkbox" />
      <br />
      <SelectField name="select" value={values.select} />
      <br />
      <TextField
        label="Name"
        placeholder="Enter your name"
        name="name"
        value={values.name}
      />
      <br />
      <SwitchField placeholder="switch" name="switch" value={values.switch} />
      <br />
      <RadioButtonsGroup />
      <br />
      <DateField onChange={handleChange} name="date" value={values.date} />
      <br />
      <Button type="submit">submit</Button>
      <DebugField />
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
      gender: 'female',
      date: new Date(),
    }}
    onSubmit={values => {
      console.log(values)
    }}
    component={MuiForm}
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
