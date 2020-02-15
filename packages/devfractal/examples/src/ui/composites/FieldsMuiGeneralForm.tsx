import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Paper,
} from '@material-ui/core'
import { Form, Formik, FormikProps } from 'formik'
import React from 'react'
import { Simple } from 'technoidentity-crud'
import {
  CheckboxField,
  DateField,
  RadioGroupField,
  RadioItem,
  SelectField,
  TextField,
} from 'technoidentity-mui'
import { ErrorField } from 'technoidentity-ui'
import { boolean, date, object, ObjectSchema, string } from 'yup'

// @TODO: implement RadioField with formik integration

interface GeneralFormProps {
  readonly name: string
  readonly username: string
  readonly email: string
  readonly agree: boolean
  readonly select: string
  readonly gender: string
  readonly message: string
  readonly date: Date
}

const InnerFieldsGeneralForm: React.FC<FormikProps<GeneralFormProps>> = ({
  values,
  handleChange,
}) => {
  return (
    <Paper>
      <Form>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <TextField name="name" required />
          <ErrorField name="name" />
        </FormControl>
        <br />
        <br />
        <FormControl>
          <FormLabel>Username</FormLabel>
          <TextField type="text" name="username" variant="filled" />
          <ErrorField name="username" />
        </FormControl>
        <br />
        <br />
        <FormControl>
          <FormLabel>Email</FormLabel>
          <TextField type="email" name="email" />
          <ErrorField name="email" />
        </FormControl>
        <br />
        <br />
        <FormControl>
          <FormLabel>Subject</FormLabel>
          <SelectField name="select" value={values.select}>
            <MenuItem value="associate">Associate</MenuItem>
            <MenuItem value="assistant">Assistant</MenuItem>
          </SelectField>
        </FormControl>

        {/* <Field>
            <InputLabel>Message</InputLabel>
            <TextareaAutosize
              placeholder="Textarea"
              name="message"
              rowsMin={4}
            />
            <ErrorField name="message" />
          </Field> */}
        <br />
        <br />

        <FormControlLabel
          control={<CheckboxField name="agree" />}
          label="I agree terms and conditions"
        />

        <FormControl>
          <FormLabel>Date</FormLabel>
          <DateField
            name="date"
            onChange={handleChange}
            value={values.date}
            variant="inline"
          />
          <ErrorField name="date" />
        </FormControl>
        <br />
        <br />

        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroupField name="gender" value={values.gender}>
            <RadioItem value="female" label="Female" />
            <RadioItem value="male" label="Male" />
            <RadioItem value="others" label="Others" />
          </RadioGroupField>
        </FormControl>

        <br />
        <br />
        <Button type="submit" color="primary" variant="contained">
          Submit
        </Button>
        <Button type="reset" color="secondary" variant="contained">
          Reset
        </Button>
        <br />
        <br />
        <Simple.Debug />
      </Form>
    </Paper>
  )
}

export const initialValues: GeneralFormProps = {
  name: '',
  username: '',
  email: '',
  select: '',
  message: '',
  agree: false,
  gender: 'female',
  date: new Date(),
}

const validationSchema: ObjectSchema<GeneralFormProps> = object({
  name: string().required('This field is required'),
  username: string().required('This field is required'),
  email: string()
    .email()
    .required('This field is required'),
  select: string().required('This field is required'),
  message: string().required('This field is required'),
  agree: boolean().required('This field is required'),
  gender: string().required('This field is required'),
  date: date().required('This field is required'),
})

export const FieldsMuiGeneralForm: () => JSX.Element = () => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    component={InnerFieldsGeneralForm}
    onSubmit={values => {
      console.log(values)
    }}
  />
)
